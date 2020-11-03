import React from "react";
import Chat from "./Chat";


function Chats() {
  return (
    <div className="chats">
      <Chat
        name="Irad"
        message="Yo!! Whats up!"
        timestamp="40 seconds ago"
        profilePic="https://scontent.ftun9-1.fna.fbcdn.net/v/t1.0-9/110168895_960824731101829_3020308821219707998_o.jpg?_nc_cat=111&ccb=2&_nc_sid=09cbfe&_nc_ohc=gti-HTaEfOYAX8nnxRL&_nc_ht=scontent.ftun9-1.fna&oh=0d5b5f541de9aac3fca8596691fde021&oe=5FC50709"
      />
    </div>
  );
}

export default Chats;
