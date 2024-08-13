import React, { useState, useEffect } from "react";
import logo from "../../assets/images/logoLigth.png";

const WhatsAppButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [message, setMessage] = useState("");
  const [botMessage, setBotMessage] = useState("");

  const handleToggleChat = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      // Simular que el bot está escribiendo
      setIsTyping(true);
      setTimeout(() => {
        setIsTyping(false);
        setBotMessage("Hola, ¿En qué puedo ayudarte?");
      }, 2000);
    }
  };

  const handleSendMessage = () => {
    const phoneNumber = "3222272840"; // Reemplaza con el número de teléfono al que quieres enviar el mensaje
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
    setMessage(""); // Limpia el input después de enviar el mensaje
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
            <div className="d-flex align-items-center p-3 ">
              <img
                src={logo}
                alt="Profile"
                className="rounded-circle me-3"
                style={{ width: "50px", height: "50px" }}
              />
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
            {isTyping ? (
              <div className="typing-indicator">
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
              </div>
            ) : (
              botMessage && (
                <div className="bot-message">
                  <p>
                    <strong>Bot:</strong> {botMessage}
                  </p>
                </div>
              )
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
              <img
                src="https://img.icons8.com/ios-glyphs/30/ffffff/filled-sent.png"
                alt="Send"
              />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default WhatsAppButton;
