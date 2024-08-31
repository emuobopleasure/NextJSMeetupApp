import { MongoClient } from "mongodb";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const data = req.body;

    // const { title, image, address, description } = data;

    const client = await MongoClient.connect(
      "mongodb+srv://owner:dcoolboy06@nextjs-meetupapp.ut1ms.mongodb.net/?retryWrites=true&w=majority&appName=NextJS-meetupApp"
    );
    const db = client.db('NextJS-meetupApp')

    const meetupsCollection = db.collection('meetups')

   const result = await meetupsCollection.insertOne(data)

   console.log(result)

   client.close()

   res.status(201).json({ message: 'Meetup inserted!'})
  } 
};

export default handler;
