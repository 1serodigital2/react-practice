import { MongoClient } from "mongodb";


const handler = async (req, res) => {
  const data = req.body;
  if (req.method === "POST") {
    const client = await MongoClient.connect(
      "mongodb+srv://digitalbijay17_db_user:TFBU5OfINXslqYSN@cluster0.lj3pog8.mongodb.net/meetups?appName=Cluster0",
    );

    const db = client.db();

    const meetupCollection = db.collection("meetups");
    const result = await meetupCollection.insertOne(data);

    console.log(result);
    client.close();

    res.status(201).json({ message: "Meetups inserted" });
    router.p
  }
};

export default handler;
