import React, { useState } from 'react';
import './CoursePlayer.css';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  HiChevronLeft, 
  HiOutlinePlay, 
  HiOutlineCheckCircle, 
  HiOutlineChatAlt, 
  HiPaperAirplane,
  HiLightningBolt,
  HiOutlineBookOpen
} from 'react-icons/hi';

import { getAIResponse } from '../../services/aiService';

const CoursePlayer = () => {
  const [activeLesson, setActiveLesson] = useState(2);
  const [chatInput, setChatInput] = useState('');
  const [messages, setMessages] = useState([
    { role: 'ai', text: "Hi! I noticed you're on the GPT-2 block. Need help with the self-attention formula?" }
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const handleSendMessage = async () => {
    if (!chatInput.trim()) return;

    const userMsg = { role: 'user', text: chatInput };
    setMessages(prev => [...prev, userMsg]);
    setChatInput('');
    setIsTyping(true);

    const aiResponse = await getAIResponse(chatInput);
    setMessages(prev => [...prev, { role: 'ai', text: aiResponse }]);
    setIsTyping(false);
  };

  const syllabus = [
    { title: "Introduction to Transformers", duration: "12:45", completed: true },
    { title: "Attention Mechanism Deep Dive", duration: "24:20", completed: true },
    { title: "Building GPT-2 from Scratch", duration: "45:10", active: true },
    { title: "Fine-tuning Large Language Models", duration: "32:15" },
    { title: "Deployment and RLHF", duration: "28:50" }
  ];

  return (
    <div className="player-os-v2">
      {/* Premium Header */}
      <header className="player-header-v2 glass-panel">
        <div className="header-left">
          <button className="btn-back-v2" onClick={() => window.location.href='/'}>
            <HiChevronLeft /> Home
          </button>
          <div className="header-sep"></div>
          <div className="course-context">
            <h2>Mastering Generative AI</h2>
            <p>Phase 4: Neural Architectures</p>
          </div>
        </div>
        
        <div className="header-right">
          <div className="completion-status">
            <span>62% SYNCED</span>
            <div className="status-track"><div className="status-fill" style={{ width: '62%' }}></div></div>
          </div>
        </div>
      </header>

      <div className="player-content-v2">
        {/* Cinema Viewport */}
        <div className="cinema-viewport">
          <div className="video-container-v2 glass-panel luminous-border">
            <div className="video-placeholder-v2">
              <HiOutlinePlay className="play-icon-glow" />
              <div className="video-meta-overlay">
                <span className="tag-live">MODULE 4.3</span>
                <h3>Building GPT-2 from Scratch</h3>
              </div>
            </div>
            
            <div className="video-controls-v2">
              <div className="controls-track"><div className="controls-fill" style={{ width: '35%' }}></div></div>
              <div className="controls-row">
                <button><HiOutlinePlay /></button>
                <span>15:20 / 45:10</span>
              </div>
            </div>
          </div>

          <div className="content-meta-v2">
            <div className="tabs-v2">
              <button className="active">Insight Overview</button>
              <button>Neural Resources</button>
              <button>Lab Sandbox</button>
            </div>
            <div className="tab-body-v2">
              <p>In this deep-dive, we'll implement the core transformer block as described in the original GPT-2 paper. We'll cover weight initialization, residual connections, and layer normalization placement.</p>
            </div>
          </div>
        </div>

        {/* Intelligence Sidebar */}
        <aside className="intel-sidebar-v2 glass-panel">
          <div className="intel-tabs">
            <button className="active"><HiOutlineBookOpen /> Roadmap</button>
            <button><HiOutlineChatAlt /> AI Orion</button>
          </div>

          <div className="intel-scroll">
            <div className="syllabus-stack-v2">
              {syllabus.map((item, idx) => (
                <div 
                  key={idx} 
                  className={`syllabus-node-v2 ${item.active ? 'active' : ''} ${item.completed ? 'completed' : ''}`}
                >
                  <div className="node-marker">
                    {item.completed ? <HiOutlineCheckCircle /> : <div className="dot"></div>}
                  </div>
                  <div className="node-info">
                    <h4>{item.title}</h4>
                    <span>{item.duration}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* AI Orion Mini-Interface */}
            <div className="orion-mini-v2 glass-panel">
              <div className="orion-header">
                <HiLightningBolt /> <span>ORION COPILOT</span>
              </div>
              <div className="orion-chat-v2">
                {messages.map((msg, i) => (
                  <div key={i} className={`m-bubble ${msg.role}`}>
                    {msg.text}
                  </div>
                ))}
                {isTyping && <div className="m-bubble ai typing">...</div>}
              </div>
              <div className="orion-input-v2">
                <input 
                  type="text" 
                  placeholder="Ask Orion..." 
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                />
                <button onClick={handleSendMessage}><HiPaperAirplane /></button>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default CoursePlayer;
