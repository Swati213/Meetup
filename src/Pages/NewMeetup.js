import React from "react";
import { useHistory } from 'react-router-dom';

import NewMeetupForm from "../Components/Meetups/NewMeetupForm";

function NewMeetup() {
 const history= useHistory();
  function addMeetUpHandler(MeetupData) {
    fetch(
      "https://react-getting-started-30df7-default-rtdb.firebaseio.com/meetups.json",
      {
        method:'POST',
        body:JSON.stringify(MeetupData),
        headers:{
          'Content-Type':'application/json'
        }
      }
    ).then(()=>{
      history.replace('/');
    });
  }
  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetUpHandler} />
    </section>
  );
}

export default NewMeetup;
