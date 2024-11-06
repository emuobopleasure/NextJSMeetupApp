import { MongoClient } from "mongodb";
import MeetupList from "@/components/meetups/MeetupList";


const HomePage = (props) => {
  return <MeetupList meetups={props.meetups} />;
};

export const getStaticProps = async () => {
  //fetch data from an API

  const client = await MongoClient.connect(
    "mongodb+srv://owner:dcoolboy06@nextjs-meetupapp.ut1ms.mongodb.net/?retryWrites=true&w=majority&appName=NextJS-meetupApp"
  );

  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find().toArray();

  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 1,
  };
};

export default HomePage;
