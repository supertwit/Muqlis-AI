import Chat, { Bubble, useMessages } from "@chatui/core";
import "@chatui/core/dist/index.css";
import React from "react";
import Navbar from "../components/Navbar";

const ChatUI = () => {
  const { messages, appendMsg, setTyping } = useMessages([]);

  function handleSend(type, val) {
    if (type === "text" && val.trim()) {
      appendMsg({
        type: "text",
        content: { text: val },
        position: "right",
      });

      setTyping(true);

      setTimeout(() => {
        appendMsg({
          type: "text",
          content: { text: "Bala bala" },
        });
      }, 1000);
    }
  }

  function renderMessageContent(msg) {
    const { content } = msg;
    return <Bubble content={content.text} />;
  }

  return (
    <div style={{height: "calc(100vh - 4em)", background: "pink"}}>
      <Navbar />
      <Chat
        navbar={{ title: "Muqlis AI"}}
        messages={messages}
        renderMessageContent={renderMessageContent}
        onSend={handleSend}
        placeholder={"Write Something..."}
      />
    </div>
  );
};

export default ChatUI;
