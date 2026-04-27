import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Editor from '@monaco-editor/react';
import { 
  HiOutlineChevronLeft, 
  HiOutlineCheckCircle, 
  HiOutlineLockClosed,
  HiOutlineLightningBolt,
  HiOutlinePaperAirplane
} from 'react-icons/hi';
import './CoursePlayer.css';

const CoursePlayer = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('Overview');
  const [sidebarTab, setSidebarTab] = useState('Roadmap');
  const [code, setCode] = useState('import torch\nimport torch.nn as nn\n\n# Implement your Self-Attention block\nclass SelfAttention(nn.Module):\n    def __init__(self, embed_size, heads):\n        super(SelfAttention, self).__init__()\n        self.embed_size = embed_size\n        self.heads = heads');

  const roadmap = [
    { id: 1, title: 'Introduction to Transformers', time: '12:45', status: 'completed' },
    { id: 2, title: 'Self-Attention Mechanism', time: '18:20', status: 'completed' },
    { id: 3, title: 'Building GPT-2 from Scratch', time: '45:10', status: 'active' },
    { id: 4, title: 'Training on Custom Datasets', time: '32:00', status: 'locked' },
    { id: 5, title: 'Deployment & Fine-tuning', time: '22:15', status: 'locked' },
  ];

  return (
    <div className="player-layout">
      {/* Top Bar */}
      <header className="player-topbar">
        <div className="topbar-left">
          <button className="back-btn" onClick={() => navigate('/dashboard')}>
            <HiOutlineChevronLeft /> Dashboard
          </button>
        </div>
        <div className="topbar-center">
          <span className="course-title-main">Generative AI Masterclass</span>
          <span className="dot-sep">·</span>
          <span className="phase-title">Phase 2: Transformers</span>
        </div>
        <div className="topbar-right">
          <div className="sync-status">
            <span className="sync-text">62% SYNCED</span>
            <div className="sync-bar">
              <motion.div 
                className="sync-fill"
                initial={{ width: 0 }}
                animate={{ width: '62%' }}
                transition={{ duration: 1, ease: 'easeOut' }}
              ></motion.div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <div className="player-main">
        {/* Video Area (68%) */}
        <div className="video-area">
          <div className="video-viewport">
            <div className="video-placeholder-immersive">
              <h2 className="fraunces">Building GPT-2 from Scratch</h2>
              <button className="immersive-play-btn">
                <svg viewBox="0 0 24 24" fill="currentColor" width="32" height="32">
                  <polygon points="5,3 19,12 5,21" />
                </svg>
              </button>
            </div>
            
            <div className="video-controls-overlay">
              <div className="scrubber-bar">
                <div className="scrubber-fill" style={{ width: '35%' }}></div>
              </div>
              <div className="controls-row">
                <div className="controls-left">
                  <span className="mod-badge">Module 4.3</span>
                  <span className="lesson-name">Building GPT-2 from Scratch</span>
                </div>
                <div className="controls-right">
                  <span className="v-time-display">15:20 / 45:10</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Tabs */}
          <div className="video-tabs">
            <div className="tab-triggers">
              {['Insight Overview', 'Neural Resources', 'Lab Sandbox'].map(t => (
                <button 
                  key={t}
                  className={`tab-trigger ${activeTab === t ? 'active' : ''}`}
                  onClick={() => setActiveTab(t)}
                >
                  {t}
                </button>
              ))}
            </div>

            <div className="tab-content-area">
              {activeTab === 'Insight Overview' && (
                <div className="insight-content">
                  <p>In this lesson, we break down the original GPT-2 architecture and implement the decoder-only transformer blocks using PyTorch. We'll focus on causal self-attention and position-wise feed-forward networks.</p>
                  <ul className="concepts-list">
                    <li><span className="teal-dot"></span> Understanding Causal Masking</li>
                    <li><span className="teal-dot"></span> Implementing Layer Normalization</li>
                    <li><span className="teal-dot"></span> Scaled Dot-Product Attention</li>
                  </ul>
                </div>
              )}

              {activeTab === 'Lab Sandbox' && (
                <div className="lab-sandbox">
                  <div className="lab-header">
                    <span>lesson_sandbox.py</span>
                    <button className="btn-run">Run Code</button>
                  </div>
                  <div className="lab-editor">
                    <Editor
                      height="200px"
                      defaultLanguage="python"
                      theme="vs-dark"
                      value={code}
                      onChange={setCode}
                      options={{ minimap: { enabled: false }, fontSize: 13 }}
                    />
                  </div>
                </div>
              )}
              
              {activeTab === 'Neural Resources' && (
                <div className="resources-list">
                  <div className="res-card liquid-glass">
                    <span className="res-type">PDF</span>
                    <span className="res-title">Attention Is All You Need Paper</span>
                    <a href="#" className="res-link">Open</a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Sidebar Panel (32%) */}
        <aside className="player-sidebar">
          <div className="sidebar-tabs">
            <button 
              className={`s-tab ${sidebarTab === 'Roadmap' ? 'active' : ''}`}
              onClick={() => setSidebarTab('Roadmap')}
            >
              Roadmap
            </button>
            <button 
              className={`s-tab ${sidebarTab === 'AI Orion' ? 'active' : ''}`}
              onClick={() => setSidebarTab('AI Orion')}
            >
              AI Orion
            </button>
          </div>

          <div className="sidebar-content">
            {sidebarTab === 'Roadmap' && (
              <div className="roadmap-list">
                {roadmap.map((item) => (
                  <div key={item.id} className={`roadmap-row ${item.status}`}>
                    <div className="row-icon">
                      {item.status === 'completed' && <HiOutlineCheckCircle className="check" />}
                      {item.status === 'active' && <div className="pulse-dot"></div>}
                      {item.status === 'locked' && <HiOutlineLockClosed className="lock" />}
                    </div>
                    <div className="row-info">
                      <span className="row-title">{item.title}</span>
                      <span className="row-meta">{item.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {sidebarTab === 'AI Orion' && (
              <div className="orion-chat">
                <div className="orion-header">
                  <HiOutlineLightningBolt /> ⚡ Orion Copilot
                </div>
                <div className="chat-history">
                  <div className="chat-bubble ai">
                    <span className="bubble-badge">AI</span>
                    Hi! You're on the GPT-2 block. Need help with the self-attention formula?
                  </div>
                </div>
                <div className="chat-input-area">
                  <input type="text" placeholder="Ask Orion..." />
                  <button className="send-btn"><HiOutlinePaperAirplane /></button>
                </div>
              </div>
            )}
          </div>
        </aside>
      </div>
    </div>
  );
};

export default CoursePlayer;
