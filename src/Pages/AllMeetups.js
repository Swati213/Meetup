import React, { useState, useEffect } from "react";
import MeetupList from "../Components/Meetups/MeetupList";
/*const DUMMY_DATA = [
  {
    id: "m1",
    title: "This is a first meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
    address: "Meetupstreet 5, 12345 Meetup City",
    description:
      "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
  },
  {
    id: "m2",
    title: "This is a second meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
    address: "Meetupstreet 5, 12345 Meetup City",
    description:
      "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
  },
];*/

function AllMeetups() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);
  useEffect(() => {
    setIsLoading(true);

    fetch(
      "https://react-getting-started-30df7-default-rtdb.firebaseio.com/meetups.json"
    )
      .then((Response) => {
        return Response.json();
      })
      .then((data) => {
        const meetUps = [];
        for (const key in data) {
          const meetUp = {
            id: key,
            ...data[key]
          };
          meetUps.push(meetUp);
        }
        setIsLoading(false);
        setLoadedMeetups(meetUps);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading....</p>
      </section>
    );
  }

  return (
    <section>
      <h1>All Meetups</h1>

      <MeetupList meetups={loadedMeetups} />
    </section>
  );
}

export default AllMeetups;
