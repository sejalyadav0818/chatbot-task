import React, { useState, useEffect } from "react";
import "./ChatView.css";
import ChatMessagee from "./ChatMessagee";
import { qaPairs } from "./QAPairs";
import "../assets/style/demo.css";
import NavBar from "../components/NavBar";

function ChatView({ user }) {
  const [userMessages, setUserMessages] = useState([]);
  const [botMessages, setBotMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [starredMessages, setStarredMessages] = useState([]);
  const [likedMessages, setLikedMessages] = useState([]);
  const [openThreads, setOpenThreads] = useState([]);
  const [threadMessages, setThreadMessages] = useState([]);
  const [currentThreadId, setCurrentThreadId] = useState(null);
  const [inThread, setInThread] = useState(false);

  console.log("user", user);
  console.log("dwqubdbqwjdb");
  useEffect(() => {
    addBotMessage("Welcome to the chat! How can I assist you?", "bot");
  }, []);

  const getCurrentTime = () => {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes}`;
  };

  const addBotMessage = (text) => {
    const time = getCurrentTime();
    setBotMessages([...botMessages, { text, time, sender: "Bot User" }]);
  };

  const addUserMessage = (text, user) => {
    const { firstname, lastname } = user;
    const time = getCurrentTime();
    setUserMessages([
      ...userMessages,
      { text, time, sender: firstname + " " + lastname },
    ]);
  };

  const handleSendMessage = () => {
    if (newMessage.trim() !== "") {
      if (currentThreadId !== null) {
        // Add message to the current open thread
        addMessageToThread(
          currentThreadId,
          newMessage,
          user.firstname + " " + user.lastname
        );
      } else {
        // Add message to the main chat
        addUserMessage(newMessage, user);
      }
      setNewMessage("");
      if (currentThreadId === null) {
        // If no thread is open, simulate bot response for main chat
        simulateBotResponse(newMessage);
      }
      if (currentThreadId !== null && !inThread) {
        // If you are not in a thread, close the thread and set currentThreadId to null
        closeThread(currentThreadId);
        setCurrentThreadId(null);
      }
    }
  };

  const handleStarMessage = (index) => {
    if (starredMessages.includes(index)) {
      // Unstar the message
      setStarredMessages(starredMessages.filter((item) => item !== index));
    } else {
      // Star the message
      setStarredMessages([...starredMessages, index]);
    }
  };

  const handleLikeMessage = (index) => {
    if (likedMessages.includes(index)) {
      // Unlike the message
      setLikedMessages(likedMessages.filter((item) => item !== index));
    } else {
      // Like the message
      setLikedMessages([...likedMessages, index]);
    }
  };

  const addMessageToThread = (threadId, text, sender) => {
    const time = getCurrentTime();
    const threadMessage = { text, time, sender, threadId };
    setThreadMessages([...threadMessages, threadMessage]);
  };

  const handleThread = (index) => {
    if (openThreads.includes(index)) {
      // If the thread is open, close it
      closeThread(index);
    } else {
      // If the thread is closed, open it
      openThread(index);
    }
  };

  const openThread = (index) => {
    if (!openThreads.includes(index)) {
      // Open the thread
      setCurrentThreadId(index); // Set the current thread ID
      setOpenThreads([...openThreads, index]);
    }
  };
  const closeThread = (index) => {
    if (openThreads.includes(index)) {
      // Close the thread
      setOpenThreads(openThreads.filter((threadId) => threadId !== index));
    }
  };

  const simulateBotResponse = (userMessage) => {
    setTimeout(() => {
      addUserMessage(userMessage, user);
      if (currentThreadId === null) {
        // Only generate the bot response if no thread is open
        const botResponse = handleUserQuery(userMessage);
        addBotMessage(botResponse);
      }
    }, 1000);
  };

  const onThread = (index, isThread) => {
    if (isThread) {
      // Close the thread
      setOpenThreads(openThreads.filter((threadId) => threadId !== index));
    } else {
      // Open the thread
      setOpenThreads([...openThreads, index]);
    }
  };
  const handleUserQuery = (userMessage) => {
    for (const qaPair of qaPairs) {
      if (userMessage.toLowerCase().includes(qaPair.question.toLowerCase())) {
        return qaPair.answer;
      }
    }

    return "I'm sorry, I couldn't understand your question.";
  };

  function interleaveMessages(messagesA, messagesB) {
    const interleavedMessages = [];
    let i = 0;
    let j = 0;

    while (i < messagesA.length || j < messagesB.length) {
      if (i < messagesA.length) {
        interleavedMessages.push(messagesA[i]);
        i++;
      }
      if (j < messagesB.length) {
        interleavedMessages.push(messagesB[j]);
        j++;
      }
    }

    return interleavedMessages;
  }
  const handleThreadClick = (index) => {
    if (openThreads.includes(index)) {
      closeThread(index);
      setCurrentThreadId(null);
      setInThread(false);
    } else {
      openThread(index);
      setCurrentThreadId(index);
      setInThread(true);
    }
  };

  return (
    <div>
      <NavBar />
      <h1>
        Welcome, {user.firstname} {user.lastname}!
      </h1>
      <div className="chat-container">
        <div className="messages">
          {interleaveMessages(botMessages, userMessages).map(
            (message, index) => (
              <ChatMessagee
                key={index}
                text={message.text}
                sender={message.sender}
                time={message.time}
                onStar={() => handleStarMessage(index)}
                onLike={() => handleLikeMessage(index)}
                isStarred={starredMessages.includes(index)}
                isLiked={likedMessages.includes(index)}
                isThread={openThreads.includes(index)}
                onThread={() => onThread(index, openThreads.includes(index))}
                onClick={() => handleThreadClick(index)}
                openThreads={openThreads}
                setOpenThreads={setOpenThreads}
              />
            )
          )}
        </div>
        <div>
          <input
            type="text"
            placeholder={inThread ? "Create a thread..." : "Type a message..."}
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                handleSendMessage();
              }
            }}
          />
          <button onClick={handleSendMessage}>
            {inThread ? "Send Thread" : "Send"}
          </button>
        </div>
        <div className="thread-messages">
          {threadMessages
            .filter((message) => message.threadId === currentThreadId)
            .map((message, index) => (
              <ChatMessagee
                key={index}
                text={message.text}
                sender={message.sender}
                time={message.time}
              />
            ))}
        </div>
        {/* )} */}
      </div>
    </div>
  );
}

export default ChatView;
