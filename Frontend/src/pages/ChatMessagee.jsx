import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar as faSolidStar,
  faHeart as faSolidHeart,
} from "@fortawesome/free-solid-svg-icons";
import {
  faStar as faRegularStar,
  faHeart as faRegularHeart,
} from "@fortawesome/free-regular-svg-icons";
import { faThreads as faBrandsThreads } from "@fortawesome/free-brands-svg-icons";
import "./ChatView.css";
import "../assets/style/demo.css";
const ChatMessagee = ({
  text,
  sender,
  time,
  onStar,
  onLike,
  isStarred,
  isLiked,
  isThread,
  onThread,
  onClick,
}) => {
  const className = `chat-message ${sender === "Bot User" ? "left" : "right"}`;

  return (
    <div className={className}>
      <span className="message-sender">{sender}</span>
      <span className="message-content">{text}</span>
      <span className="message-time">{time}</span>
      <div className="message-actions">
        <button onClick={() => onStar()}>
          {isStarred ? (
            <FontAwesomeIcon icon={faSolidStar} className="blue-star" />
          ) : (
            <FontAwesomeIcon icon={faRegularStar} />
          )}
        </button>
        <button onClick={() => onLike()}>
          {isLiked ? (
            <FontAwesomeIcon icon={faSolidHeart} className="red-heart" />
          ) : (
            <FontAwesomeIcon icon={faRegularHeart} />
          )}
        </button>
        <button onClick={() => onClick()}>
          {" "}
          <FontAwesomeIcon icon={faBrandsThreads} className="indigo-thread" />
        </button>
        {isThread && (
          <button onClick={() => onThread()} hidden>
            {isThread ? null : null}
          </button>
        )}
      </div>
    </div>
  );
};

export default ChatMessagee;
