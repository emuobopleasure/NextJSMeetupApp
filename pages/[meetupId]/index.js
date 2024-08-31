import MeetupDetail from "@/components/meetups/MeetupDetail";

const MeetupDetails = () => {
  return (
    <MeetupDetail
      image="https://www.meetup.com/blog/wp-content/uploads/2022/05/option-1.jpg"
      title="first title"
      address="some street 5, some city"
      description="The meetup description"
    />
  );
};

export const getStaticPaths = async () => {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: 'm1'
        }
      },
      {
        params: {
          meetupId: 'm2'
        }
      }
    ]
  }
}

export const getStaticProps = async (context) => {

  const meetupId = context.params.meetupId
  console.log(meetupId, 'meet')

  return {
    props: {
      meetupData: {
        id: meetupId,
        image:
          "https://www.meetup.com/blog/wp-content/uploads/2022/05/option-1.jpg",
        title: "first title",
        address: "some street 5, some city",
        description: "The meetup description",
      },
    },
  };
};

export default MeetupDetails;
