import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import "./ChatScreen.css";

function ChatScreen() {
  const [input, setInput] = useState([]);
  const [messages, setMessages] = useState([
    {
      name: "Irad",
      image:
        "https://scontent.ftun9-1.fna.fbcdn.net/v/t1.0-9/110168895_960824731101829_3020308821219707998_o.jpg?_nc_cat=111&ccb=2&_nc_sid=09cbfe&_nc_ohc=gti-HTaEfOYAX8nnxRL&_nc_ht=scontent.ftun9-1.fna&oh=0d5b5f541de9aac3fca8596691fde021&oe=5FC50709",
      message: "helloo there!!",
    },
    {
      name: "Irad",
      image:
        "https://scontent.ftun9-1.fna.fbcdn.net/v/t1.0-9/110168895_960824731101829_3020308821219707998_o.jpg?_nc_cat=111&ccb=2&_nc_sid=09cbfe&_nc_ohc=gti-HTaEfOYAX8nnxRL&_nc_ht=scontent.ftun9-1.fna&oh=0d5b5f541de9aac3fca8596691fde021&oe=5FC50709",
      message: "how are you?",
    },
    {
      message: "i am fine. thanks!",
    },
  ]);

  const handleSend = (e) => {
    e.preventDefault();
    setMessages([...messages, { message: input }]);
    setInput("");
  };
  return (
    <div className="chatScreen">
      <p className="chatScreen__timestamp">
        You matched with Irad on 11/03/2020
      </p>

      {messages.map((message) =>
        message.name ? (
          <div className="chatScreen__message">
            <Avatar
              className="chatScreen__image"
              alt={message.name}
              src={message.image}
            />
            <p className="chatScreen__text">{message.message}</p>
          </div>
        ) : (
          <div className="chatScreen__message">
            <p className="chatScreen__textUser">{message.message}</p>
          </div>
        )
      )}

      <form className="chatScreen__input">
        <input
          className="chatScreen__inputField"
          placeholder="Type a message..."
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="chatScreen__inputButton" onClick={handleSend}>
          SEND
        </button>
      </form>
    </div>
  );
}

export default ChatScreen;
