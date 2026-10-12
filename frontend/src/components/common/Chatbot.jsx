import React, { useState, useRef, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { MessageSquare, X, Minus, Send, Bot, ExternalLink, Sparkles } from 'lucide-react';
import { openWhatsApp } from '../../utils/whatsapp';
import './Chatbot.css';

const Chatbot = ({ isHome: propIsHome }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = propIsHome !== undefined ? propIsHome : location.pathname === '/';
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [inputValue, setInputValue] = useState('');
  
  const getCurrentTime = () => {
    return new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'bot',
      text: 'Namaste! 👋 Welcome to Sunil Tours N Travels. How can we help you plan your Chikkamagaluru trip?',
      time: getCurrentTime()
    }
  ]);

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen && !isMinimized) {
      scrollToBottom();
    }
  }, [messages, isOpen, isMinimized]);

  // Predefined Quick Replies
  const quickReplies = [
    { label: 'Explore Destinations', id: 'destinations' },
    { label: '3-Day Tour Packages', id: 'packages' },
    { label: 'Student Tours', id: 'student' },
    { label: 'Corporate Tours', id: 'corporate' },
    { label: 'Vehicle Hire', id: 'vehicles' },
    { label: 'Talk on WhatsApp', id: 'whatsapp', isWhatsApp: true }
  ];

  const handleQuickReply = (reply) => {
    if (reply.id === 'whatsapp') {
      openWhatsApp(
        'Namaste Sunil Tours N Travels! I would like to chat with you about planning my Chikkamagaluru trip.'
      );
      return;
    }

    const time = getCurrentTime();
    const userMsg = { id: Date.now(), sender: 'user', text: reply.label, time };

    let botResponse = '';
    let actionLink = null;

    if (reply.id === 'destinations') {
      botResponse = 'Chikkamagaluru features iconic spots like Mullayanagiri Peak (1,930m altitude), Hebbe Waterfalls (4x4 Jeep Trek), and Belur Chennakeshava Hoysala Temple. Would you like to view our full destination list?';
      actionLink = { label: 'View All Destinations', path: '/destinations' };
    } else if (reply.id === 'packages') {
      botResponse = 'Our day tours feature fixed vehicle rates:\n• Day 1 (Mullayanagiri, Jhari, Bababudangiri): ₹3,500\n• Day 2 (Kemmanagundi, Hebbe, Kalhattagiri): ₹4,000\n• Day 3 (Belur, Halebidu, Yagachi): ₹3,500\n• Day 4 Custom Sightseeing: ₹3,500\nAll rates cover private vehicle, driver & fuel!';
      actionLink = { label: 'View Tour Packages', path: '/packages' };
    } else if (reply.id === 'student') {
      botResponse = 'We specialize in college & school group trips! We offer 50-seater luxury buses, sightseeing circuits, campfire assistance, and custom budget quotations.';
    } else if (reply.id === 'corporate') {
      botResponse = 'We organize complete corporate retreats with doorstep transport from Bangalore or Mysore, resort stays, 4x4 off-road jeep safaris, and team outings.';
    } else if (reply.id === 'vehicles') {
      botResponse = 'We provide comfortable 10-seater Force Tempo Travellers for families and 50-seater luxury buses for large groups. All rentals include an experienced local driver and fuel!';
      actionLink = { label: 'Explore Vehicles Fleet', path: '/vehicles' };
    }

    const botMsg = {
      id: Date.now() + 1,
      sender: 'bot',
      text: botResponse,
      actionLink,
      time
    };

    setMessages((prev) => [...prev, userMsg, botMsg]);
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const time = getCurrentTime();
    const text = inputValue.trim();
    const userMsg = { id: Date.now(), sender: 'user', text, time };
    setInputValue('');

    const lower = text.toLowerCase();
    let botText = '';
    let actionLink = null;

    if (lower.includes('price') || lower.includes('cost') || lower.includes('rate') || lower.includes('tariff')) {
      botText = 'Day 1 sightseeing is ₹3,500; Day 2 is ₹4,000; Day 3 is ₹3,500; Day 4 custom is ₹3,500. Rates cover private vehicle, driver allowance, fuel, and tolls.';
      actionLink = { label: 'View Detailed Packages', path: '/packages' };
    } else if (lower.includes('vehicle') || lower.includes('tempo') || lower.includes('bus') || lower.includes('car')) {
      botText = 'We have 10-seater Tempo Travellers and 50-seater luxury buses available for family, college, and corporate trips.';
      actionLink = { label: 'View Fleet Vehicles', path: '/vehicles' };
    } else if (lower.includes('jeep') || lower.includes('safari') || lower.includes('offroad') || lower.includes('trek')) {
      botText = 'We arrange thrilling 4x4 off-road jeep trekking safaris for Mullayanagiri, Jhari Waterfalls, Bababudangiri, and Hebbe Waterfalls!';
    } else if (lower.includes('contact') || lower.includes('phone') || lower.includes('number') || lower.includes('call')) {
      botText = 'You can reach Mr. Sunil directly anytime at +91 8197007359 (Call or WhatsApp). Office: Main Road, Chikkamagaluru, Karnataka.';
    } else {
      botText = 'Thank you for your enquiry! For personalized itineraries, custom group quotes, or date availability, please reach us directly on WhatsApp at +91 8197007359.';
    }

    const botMsg = {
      id: Date.now() + 1,
      sender: 'bot',
      text: botText,
      actionLink,
      time
    };

    setMessages((prev) => [...prev, userMsg, botMsg]);
  };

  const toggleOpen = () => {
    if (!isOpen) {
      setIsOpen(true);
      setIsMinimized(false);
    } else if (isMinimized) {
      setIsMinimized(false);
    } else {
      setIsOpen(false);
    }
  };

  return (
    <div className={`chatbot-wrapper ${isHome ? 'home-page-floating-chatbot' : ''}`}>
      {/* Floating Messenger-Style Button */}
      {(!isOpen || isMinimized) && (
        <button
          onClick={toggleOpen}
          className="floating-chat-btn"
          aria-label="Open Travel Assistant Chat"
        >
          <MessageSquare size={26} color="#FFFFFF" />
          <span className="online-dot" />
          <span className="chat-tooltip">Chat with us</span>
        </button>
      )}

      {/* Messenger-Style Chat Panel Window */}
      {isOpen && !isMinimized && (
        <div className="chat-window">
          {/* Header */}
          <div className="chat-header">
            <div className="chat-header-info">
              <div className="avatar-badge">
                <Bot size={22} color="#123C2A" />
              </div>
              <div>
                <div className="chat-title">Sunil Travel Assistant</div>
                <div className="chat-status">
                  <span style={{ width: '8px', height: '8px', background: '#25D366', borderRadius: '50%', display: 'inline-block' }} />
                  <span>Online</span>
                </div>
              </div>
            </div>

            <div className="chat-header-actions">
              <button
                onClick={() => setIsMinimized(true)}
                className="chat-action-btn"
                title="Minimize chat"
                aria-label="Minimize chat"
              >
                <Minus size={18} />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="chat-action-btn"
                title="Close chat"
                aria-label="Close chat"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {/* Chat Messages Stream */}
          <div className="chat-body">
            {messages.map((msg) => (
              <div key={msg.id} className={`message-bubble-wrapper ${msg.sender}`}>
                <div className={`message-bubble ${msg.sender}`}>
                  {msg.text.split('\n').map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      {i < msg.text.split('\n').length - 1 && <br />}
                    </React.Fragment>
                  ))}
                  
                  {/* Action Link Option if available */}
                  {msg.actionLink && (
                    <button
                      onClick={() => navigate(msg.actionLink.path)}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        marginTop: '10px',
                        background: '#123C2A',
                        color: '#FFD429',
                        padding: '6px 14px',
                        borderRadius: '16px',
                        border: '1px solid #FFD429',
                        fontSize: '0.78rem',
                        fontWeight: 700,
                        cursor: 'pointer'
                      }}
                    >
                      <span>{msg.actionLink.label}</span>
                      <ExternalLink size={12} />
                    </button>
                  )}
                </div>
                <span className="message-time">{msg.time}</span>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Reply Chips Area */}
          <div className="quick-replies-container">
            <div className="quick-reply-label">Quick Enquiry Chips:</div>
            <div className="quick-reply-chips">
              {quickReplies.map((reply) => (
                <button
                  key={reply.id}
                  onClick={() => handleQuickReply(reply)}
                  className={`quick-chip ${reply.isWhatsApp ? 'whatsapp-chip' : ''}`}
                >
                  {reply.label}
                </button>
              ))}
            </div>
          </div>

          {/* Message Input Bar */}
          <form onSubmit={handleSend} className="chat-input-bar">
            <input
              type="text"
              placeholder="Type your message…"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="chat-input"
            />
            <button
              type="submit"
              className="send-btn"
              disabled={!inputValue.trim()}
              title="Send message"
              aria-label="Send message"
            >
              <Send size={18} />
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
