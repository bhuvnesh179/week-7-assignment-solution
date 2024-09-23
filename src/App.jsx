import ProfileComponent from "./ProfileComponent";
import { useState } from "react";


function App(){
  const [card, setCard] = useState({
    imgLink: "/cat.jpg",
    name: "Rita Correia",
    age: "32",
    country: "London",
    followers: "80K",
    likes: "803K",
    photos: "1.4K",
  })
  


  return (
    <>
    <ProfileComponent card={card} />
    </>
  )
}

export default App;