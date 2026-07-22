import { useRouter } from "next/router";
import MeetupDetai from "../../components/meetups/MeetupDetail";
import { MongoClient, ObjectId } from "mongodb";

const MeetupDetailPage = (props) => {
  const router = useRouter();

  return (
    <MeetupDetai
      title={props.meetupData.title}
      image={props.meetupData.image}
      description={props.meetupData.description}
      address={props.meetupData.address}
    />
  );
};

export const getStaticPaths = async () => {
  const client = await MongoClient.connect(
    "mongodb+srv://digitalbijay17_db_user:TFBU5OfINXslqYSN@cluster0.lj3pog8.mongodb.net/meetups?appName=Cluster0",
  );

  const db = client.db();

  const meetupCollection = db.collection("meetups");
  const meetups = await meetupCollection.find({}, { _id: 1 }).toArray();
  client.close();

  return {
    fallback: false,
    paths: meetups.map((meetup) => ({
      params: { meetupId: meetup._id.toString() },
    })),
  };
};
export const getStaticProps = async (context) => {
  const meetupId = context.params.meetupId;

  const client = await MongoClient.connect(
    "mongodb+srv://digitalbijay17_db_user:TFBU5OfINXslqYSN@cluster0.lj3pog8.mongodb.net/meetups?appName=Cluster0",
  );

  const db = client.db();

  const meetupCollection = db.collection("meetups");
  const selectedMeetup = await meetupCollection.findOne({
    _id: new ObjectId(meetupId),
  });
  console.log("[selectedMeetup] ", selectedMeetup);
  client.close();

  return {
    props: {
      meetupData: {
        id: selectedMeetup._id.toString(),
        title: selectedMeetup.title,
        image: selectedMeetup.image,
        description: selectedMeetup.description,
      },
    },
  };
};

export default MeetupDetailPage;
