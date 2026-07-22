import { MongoClient } from "mongodb";
import MeetupList from "../components/meetups/MeetupList";

const HomePage = (props) => {
  return <MeetupList meetups={props.meetups}></MeetupList>;
};

export const getStaticProps = async () => {
  const client = await MongoClient.connect(
    "mongodb+srv://digitalbijay17_db_user:TFBU5OfINXslqYSN@cluster0.lj3pog8.mongodb.net/meetups?appName=Cluster0",
  );

  const db = client.db();
  const meetupCollection = db.collection("meetups");
  const meetups = await meetupCollection.find().toArray();
  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        image: meetup.image,
        description: meetup.description,
        address: meetup.address,
        id: meetup._id.toString(),
      })),
      revalidate: 1,
    },
  };
};

export default HomePage;
