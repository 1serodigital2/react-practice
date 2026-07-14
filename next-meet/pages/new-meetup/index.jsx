import NewMeetupForm from "../../components/meetups/NewMeetupForm";

const NewMeetup = () => {
  const handleAddMeetup = (meetupData) => {
    console.log(meetupData);
  };

  return <NewMeetupForm onAddMeetup={handleAddMeetup} />;
};

export default NewMeetup;
