import NewMeetupForm from "@/components/meetups/NewMeetupForm";
import { useRouter } from "next/router";

const NewMeetupPage = () => {
  const router = useRouter()

  const addMeetupHandler = async (enteredMeetupData) => {
    const response = await fetch('/api/new-meetup', {
      method: 'POST',
      body: JSON.stringify(enteredMeetupData),
      headers: {
        'Content-Type' : 'application/json'
      }
    })

    // console.log(response)

    const data = await response.json()
    console.log(data, 'data')

    router.push('/')
  };

  return <NewMeetupForm onAddMeetup={addMeetupHandler} />  
  
}

export default NewMeetupPage