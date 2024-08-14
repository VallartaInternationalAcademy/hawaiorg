import React, { useState, useEffect } from "react";
import { FaCheckDouble, FaRegPaperPlane } from "react-icons/fa";
import { IoSend } from "react-icons/io5";
import logo from "../../assets/images/logo.png";

const WhatsAppButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<
    { name: string; text: string; time: string }[]
  >([]);
  const [botMessage, setBotMessage] = useState("");

  const handleToggleChat = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setIsTyping(true);
      setTimeout(() => {
        setIsTyping(false);
        setBotMessage("Hola, ¿En qué puedo ayudarte?");
        setMessages([
          ...messages,
          {
            name: "HAWAI ORG",
            text: "Hola, ¿En qué puedo ayudarte?",
            time: getCurrentTime(),
          },
        ]);
      }, 2000);
    }
  };

  const handleSendMessage = () => {
    if (message.trim() === "") return;
    setMessages([
      ...messages,
      { name: "You", text: message, time: getCurrentTime() },
    ]);
    setMessage("");
    const phoneNumber = "1234567890"; // Reemplaza con el número de teléfono al que quieres enviar el mensaje
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  const getCurrentTime = () => {
    const now = new Date();
    return now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  return (
    <div>
      {/* Botón flotante de WhatsApp */}
      <div className="whatsapp-button" onClick={handleToggleChat}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
        />
      </div>

      {/* Interfaz de chat de WhatsApp */}
      {isOpen && (
        <div className="whatsapp-chat-window">
          <div className="chat-header">
            <div className="d-flex align-items-center p-3  rounded shadow-sm">
              <div className="position-relative d-inline-block">
                <img
                  src={logo}
                  alt="Profile"
                  className="rounded-circle me-3"
                  style={{ width: "50px", height: "50px" }}
                />
              </div>
              <div>
                <p style={{ fontSize: "14px" }} className="mb-1 fw-bold">
                  HAWAI ORG
                </p>
                <p style={{ fontSize: "12px" }} className="mb-0 text-muted">
                  Typically replies within 1 hour
                </p>
              </div>
            </div>
            <button onClick={handleToggleChat}>&times;</button>
          </div>
          <div className="chat-body">
            {messages.map((msg, index) => (
              <div key={index} className="chat-message">
                <p className="chat-message-name">{msg.name}</p>
                <div className="chat-message-text">
                  <p>{msg.text}</p>
                  <span className="chat-message-time">{msg.time}</span>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="chat-message">
                <div className="typing-indicator">
                  <span className="dot"></span>
                  <span className="dot"></span>
                  <span className="dot"></span>
                </div>
              </div>
            )}
          </div>
          <div className="chat-footer">
            <input
              type="text"
              placeholder="Escribe un mensaje..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button onClick={handleSendMessage}>
              <IoSend />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default WhatsAppButton;
