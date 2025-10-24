import { useActionState } from "react";
import {
  isEmail,
  isEqualToOtherValue,
  isNotEmpty,
  hasMinLength,
} from "../util/validation";

export default function Signup() {
  function signupAction(prevFormState, formData) {
    const email = formData.get("email");
    const password = formData.get("password");
    const confirmPassword = formData.get("confirm-password");
    const firstName = formData.get("first-name");
    const lastName = formData.get("last-name");
    const role = formData.get("role");
    const acquisitionChannel = formData.getAll("acquisition");
    const terms = formData.get("terms");

    let errors = [];

    if (!isEmail(email) || !isNotEmpty(email)) {
      errors.push("Invalid email");
    }

    if (isNotEmpty(password) || !hasMinLength(password, 4)) {
      errors.push("Password must be atleast 5 characters");
    }

    if (
      !isNotEmpty(confirmPassword) ||
      (!isEqualToOtherValue(password) && !hasMinLength(confirmPassword, 4))
    ) {
      errors.push("Does not match with password");
    }

    if (!isNotEmpty(firstName) || !hasMinLength(firstName, 4)) {
      errors.push("Name must be atleast of 5 characters");
    }
    if (!isNotEmpty(lastName) || !hasMinLength(lastName, 4)) {
      errors.push("last name must be atleast of 3 characters");
    }

    if (!role) {
      errors.push("Please select role");
    }
    if (!terms) {
      errors.push("Please select our terms");
    }

    if (acquisitionChannel.length === 0) {
      errors.push("Please select acquisition");
    }

    console.log("errors", errors);

    if (errors.length > 0) {
      return {
        errors,
        enteredValues: {
          email,
          password,
          confirmPassword,
          firstName,
          lastName,
          role,
          acquisitionChannel,
          terms,
        },
      };
    }
    return { errors: null };
  }

  const [formState, formAction] = useActionState(signupAction, {
    errors: null,
  });

  return (
    <form action={formAction}>
      <h2>Welcome on board!</h2>
      <p>We just need a little bit of data from you to get you started 🚀</p>

      <div className="control">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="text"
          name="email"
          defaultValue={formState.enteredValues?.email}
        />
      </div>

      <div className="control-row">
        <div className="control">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            defaultValue={formState.enteredValues?.password}
          />
        </div>

        <div className="control">
          <label htmlFor="confirm-password">Confirm Password</label>
          <input
            id="confirm-password"
            type="password"
            name="confirm-password"
            defaultValue={formState.enteredValues?.confirmPassword}
          />
        </div>
      </div>

      <hr />

      <div className="control-row">
        <div className="control">
          <label htmlFor="first-name">First Name</label>
          <input
            type="text"
            id="first-name"
            name="first-name"
            defaultValue={formState.enteredValues?.firstName}
          />
        </div>

        <div className="control">
          <label htmlFor="last-name">Last Name</label>
          <input
            type="text"
            id="last-name"
            name="last-name"
            defaultValue={formState.enteredValues?.lastName}
          />
        </div>
      </div>

      <div className="control">
        <label htmlFor="phone">What best describes your role?</label>
        <select
          id="role"
          name="role"
          defaultValue={formState.enteredValues?.role}
        >
          <option value="student">Student</option>
          <option value="teacher">Teacher</option>
          <option value="employee">Employee</option>
          <option value="founder">Founder</option>
          <option value="other">Other</option>
        </select>
      </div>

      <fieldset>
        <legend>How did you find us?</legend>
        <div className="control">
          <input
            type="checkbox"
            id="google"
            name="acquisition"
            value="google"
            defaultValue={formState.enteredValues?.acquisitionChannel}
          />
          <label htmlFor="google">Google</label>
        </div>

        <div className="control">
          <input
            type="checkbox"
            id="friend"
            name="acquisition"
            value="friend"
            defaultValue={formState.enteredValues?.acquisitionChannel}
          />
          <label htmlFor="friend">Referred by friend</label>
        </div>

        <div className="control">
          <input
            type="checkbox"
            id="other"
            name="acquisition"
            value="other"
            defaultValue={formState.enteredValues?.role}
          />
          <label htmlFor="other">Other</label>
        </div>
      </fieldset>

      <div className="control">
        <label htmlFor="terms-and-conditions">
          <input
            type="checkbox"
            id="terms-and-conditions"
            name="terms"
            defaultValue={formState.enteredValues?.terms}
          />
          I agree to the terms and conditions
        </label>
      </div>

      {formState.errors && (
        <ul className="error">
          {formState.errors.map((value) => (
            <li>{value}</li>
          ))}
        </ul>
      )}

      <p className="form-actions">
        <button type="reset" className="button button-flat">
          Reset
        </button>
        <button className="button">Sign up</button>
      </p>
    </form>
  );
}
