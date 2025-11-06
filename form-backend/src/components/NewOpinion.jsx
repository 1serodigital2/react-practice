import { useActionState, use } from "react";
import { OpinionsContext } from "../store/opinions-context";
import Submit from "./Submit";

export function NewOpinion() {
  const { addOpinion } = use(OpinionsContext);

  async function handleFormSubmission(prevFormState, formData) {
    const userName = formData.get("userName");
    const title = formData.get("title");
    const body = formData.get("body");

    let errors = [];
    if (userName == "" || userName.length < 3) {
      errors.push("Invalid username");
    }
    if (title == "" || title.length < 4) {
      errors.push("Invalid title");
    }
    if (body == "" || body.length < 10) {
      errors.push("Invalid message");
    }

    const enteredValues = {
      userName,
      title,
      body,
    };
    if (errors.length === 0) {
      await addOpinion(enteredValues);

      return { errors: null };
    }

    return {
      errors,
      enteredValues: enteredValues,
    };
  }

  const [formState, formAction] = useActionState(handleFormSubmission, {
    errors: null,
  });

  console.log("formState", formState);

  return (
    <div id="new-opinion">
      <h2>Share your opinion!</h2>
      <form action={formAction}>
        <div className="control-row">
          <p className="control">
            <label htmlFor="userName">Your Name</label>
            <input
              type="text"
              id="userName"
              name="userName"
              defaultValue={formState.enteredValues?.userName}
            />
          </p>

          <p className="control">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              defaultValue={formState.enteredValues?.title}
            />
          </p>
        </div>
        <p className="control">
          <label htmlFor="body">Your Opinion</label>
          <textarea
            id="body"
            name="body"
            rows={5}
            defaultValue={formState.enteredValues?.body}
          ></textarea>
        </p>
        <Submit />

        {formState.errors && (
          <ul>
            {formState.errors.map((value) => (
              <li key={value}>{value}</li>
            ))}
          </ul>
        )}
      </form>
    </div>
  );
}
