import { useParams } from "react-router-dom";

import Input from "../../components/dashboard/Input";

const EditEventPage = () => {
  const params = useParams();
  console.log("params", params);

  return (
    <>
      <h1>Edit event page</h1>
      <p>Firebase key: {params.eventKey}</p>

      <form action="">
        <Input
          type="text"
          label="Name"
          // value={formState?.enteredValue?.title}
        />
        <Input type="date" label="Event date" />
        <Input type="text" label="Location" />
        <button>Update</button>
      </form>
    </>
  );
};

export default EditEventPage;
