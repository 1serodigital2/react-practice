import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A first meetup",
    image:
      "https://www.reddit.com/media?url=https%3A%2F%2Fpreview.redd.it%2Fsceneray-3840x2160-v0-9k5qhq26yor61.jpg%3Fauto%3Dwebp%26s%3D3881f8867fe3bb41e0f795cb520adb056da29de4",
    address: "nsdnfsdn flsndfd",
    description: "s dfisdfisdifisd bf",
  },
  {
    id: "m2",
    title: "A second meetup",
    image:
      "https://www.reddit.com/media?url=https%3A%2F%2Fpreview.redd.it%2Fsceneray-3840x2160-v0-9k5qhq26yor61.jpg%3Fauto%3Dwebp%26s%3D3881f8867fe3bb41e0f795cb520adb056da29de4",
    address: "nsdnfsdn flsndfd",
    description: "s dfisdfisdifisd bf",
  },
  {
    id: "m3",
    title: "A third meetup",
    image:
      "https://www.reddit.com/media?url=https%3A%2F%2Fpreview.redd.it%2Fsceneray-3840x2160-v0-9k5qhq26yor61.jpg%3Fauto%3Dwebp%26s%3D3881f8867fe3bb41e0f795cb520adb056da29de4",
    address: "nsdnfsdn flsndfd",
    description: "s dfisdfisdifisd bf",
  },
  {
    id: "m4",
    title: "A forth meetup",
    image:
      "https://www.reddit.com/media?url=https%3A%2F%2Fpreview.redd.it%2Fsceneray-3840x2160-v0-9k5qhq26yor61.jpg%3Fauto%3Dwebp%26s%3D3881f8867fe3bb41e0f795cb520adb056da29de4",
    address: "nsdnfsdn flsndfd",
    description: "s dfisdfisdifisd bf",
  },
];

const HomePage = () => {
  return <MeetupList meetups={DUMMY_MEETUPS}></MeetupList>;
};

export default HomePage;
