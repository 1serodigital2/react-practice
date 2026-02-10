import Input from "../../components/dashboard/Input";

const NewEventPage = () => {
  return (
    <>
      <h1>Create New Event</h1>
      <form action="">
        <Input type="text" label="Name" />
        <Input type="date" label="Event date" />
        <Input type="texts" label="Location" />
        <button>Submit</button>
      </form>
    </>
  );
};

export default NewEventPage;
