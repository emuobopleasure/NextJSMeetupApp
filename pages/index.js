import MeetupList from "@/components/meetups/MeetupList";

const DUMMY_MEETUPS = [
    {
        id: 'm1',
        title: 'A first meetup',
        image: 'https://www.meetup.com/blog/wp-content/uploads/2022/05/option-1.jpg',
        address: 'Sime address 5, 123 random street',
        description: 'This is a first meetup'
    },
    {
        id: 'm2',
        title: 'A second meetup',
        image: 'https://www.meetup.com/blog/wp-content/uploads/2022/05/option-1.jpg',
        address: 'Sime address 6, 123 random street',
        description: 'This is a second meetup'
    },
    
]
const HomePage = (props) => {
  return (
    <MeetupList meetups={props.meetups}/>
  );
};

export const getStaticProps = async () => {
  return {
    props: {
      meetups: DUMMY_MEETUPS
    },
    revalidate: 10
  }
}

export default HomePage;