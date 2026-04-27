import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  HiOutlineHome, HiOutlineBookOpen, HiOutlineUserGroup, 
  HiOutlineClipboardList, HiOutlineCube, HiOutlinePaperAirplane,
  HiOutlineChartBar, HiOutlineCog
} from 'react-icons/hi';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell, PieChart, Pie } from 'recharts';
import Editor from '@monaco-editor/react';
import './Dashboard.css';

const COURSES = [
  { id: 1, name: 'Generative AI Masterclass', phase: 'Phase 2: Transformers', progress: 62, phases: ['Foundations','Transformers','Fine-tuning','Deployment'] },
  { id: 2, name: 'Python for Machine Learning', phase: 'Phase 1: Python Basics', progress: 35, phases: ['Python Basics','NumPy/Pandas','Sklearn','Projects'] },
  { id: 3, name: 'Prompt Engineering 101', phase: 'Phase 1: Basics', progress: 18, phases: ['Basics','Chain of Thought','Agents','Production'] },
  { id: 4, name: 'Computer Vision with PyTorch', phase: 'Phase 1: CNNs', progress: 8, phases: ['CNNs','Object Detection','Segmentation','Deployment'] },
  { id: 5, name: 'MLOps & Model Deployment', phase: 'Not Started', progress: 0, phases: ['Docker','FastAPI','Cloud Deploy','Monitoring'] },
];

const COHORTS_DATA = [
  { id: 1, title: 'Generative AI Bootcamp', mentor: 'Dr. Sarah Chen', date: 'May 5, 2026', spots: 12, duration: '8 Weeks' },
  { id: 2, title: 'ML Foundations', mentor: 'Alex Rivera', date: 'May 12, 2026', spots: 8, duration: '6 Weeks' },
  { id: 3, title: 'Prompt Engineering', mentor: 'Jason Wright', date: 'Jun 1, 2026', spots: 20, duration: '4 Weeks' },
  { id: 4, title: 'AI Agents Workshop', mentor: 'Elena Rostova', date: 'Jun 15, 2026', spots: 5, duration: '10 Weeks' },
];

const LEADERBOARD = [
  { rank: 1, name: 'Priya Sharma', xp: 8450, streak: 42 },
  { rank: 2, name: 'James Liu', xp: 7820, streak: 38 },
  { rank: 3, name: 'Maria Garcia', xp: 6900, streak: 25 },
  { rank: 4, name: 'Ravi Patel', xp: 5200, streak: 19 },
  { rank: 5, name: 'Alex Student (You)', xp: 2450, streak: 14, isYou: true },
];

const fadeUp = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.4, ease: 'easeOut' } };

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('Home');
  const [code, setCode] = useState('import torch\nimport torch.nn as nn\n\nclass SimpleNet(nn.Module):\n    def __init__(self):\n        super().__init__()\n        self.fc1 = nn.Linear(784, 128)\n        self.fc2 = nn.Linear(128, 10)\n\n    def forward(self, x):\n        x = torch.relu(self.fc1(x))\n        return self.fc2(x)\n\nmodel = SimpleNet()\nprint(f"Parameters: {sum(p.numel() for p in model.parameters())}")');
  const [quizAnswer, setQuizAnswer] = useState(null);
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [terminalOutput, setTerminalOutput] = useState(['> Ready...']);
  const navigate = useNavigate();

  const stats = [
    { label: 'Courses Completed', value: '3/8' },
    { label: 'Current Streak', value: '14 days 🔥' },
    { label: 'Total XP', value: '2,450' },
    { label: 'Rank', value: '#47 Globally' },
  ];

  const activityData = [
    { name: 'Mon', hours: 2.5 }, { name: 'Tue', hours: 4 }, { name: 'Wed', hours: 1.5 },
    { name: 'Thu', hours: 5 }, { name: 'Fri', hours: 3 }, { name: 'Sat', hours: 0.5 }, { name: 'Sun', hours: 2 },
  ];

  const skillData = [
    { name: 'Python', value: 40, color: '#F59E0B' },
    { name: 'ML Theory', value: 30, color: '#EA580C' },
    { name: 'Deep Learning', value: 20, color: '#22C55E' },
    { name: 'Deployment', value: 10, color: 'rgba(245,240,232,0.2)' },
  ];

  const navItems = [
    { name: 'Home', icon: <HiOutlineHome /> },
    { name: 'My Courses', icon: <HiOutlineBookOpen /> },
    { name: 'Live Cohorts', icon: <HiOutlineUserGroup /> },
    { name: 'Practice', icon: <HiOutlineClipboardList /> },
    { name: 'Projects', icon: <HiOutlineCube /> },
    { name: 'Deploy', icon: <HiOutlinePaperAirplane /> },
    { name: 'Leaderboard', icon: <HiOutlineChartBar /> },
    { name: 'Settings', icon: <HiOutlineCog /> },
  ];

  const handleRunCode = () => {
    setTerminalOutput(['> Running...', '> Parameters: 101770', '> Model compiled successfully ✓']);
  };

  const handleQuizSubmit = () => { setQuizSubmitted(true); };

  /* ─── Tab Content Renderers ─── */

  const renderHome = () => (
    <>
      <div className="db-stats-grid">
        {stats.map((stat, i) => (
          <motion.div key={stat.label} className="stat-card liquid-glass" {...fadeUp} transition={{ delay: i * 0.1 }}>
            <span className="stat-label">{stat.label}</span>
            <div className="stat-value-row"><span className="stat-value">{stat.value}</span></div>
          </motion.div>
        ))}
      </div>

      <div className="db-grid-main">
        <div className="db-col-left">
          <section className="db-section liquid-glass">
            <span className="section-label">// Your progress</span>
            <h3>Active Courses</h3>
            <div className="progress-list">
              {COURSES.slice(0, 3).map(c => (
                <div key={c.id} className="progress-row">
                  <div className="progress-info">
                    <span className="course-name">{c.name}</span>
                    <span className="phase-label">{c.phase}</span>
                  </div>
                  <div className="progress-bar-container">
                    <div className="progress-bar-fill" style={{ width: `${c.progress}%` }}></div>
                  </div>
                  <span className="progress-pct">{c.progress}%</span>
                  <button className="continue-btn" onClick={() => navigate('/player')}>Continue →</button>
                </div>
              ))}
            </div>
          </section>

          <section className="db-section liquid-glass">
            <span className="section-label">// Learning activity</span>
            <h3>Weekly Focus</h3>
            <div className="chart-wrapper" style={{ height: 200 }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={activityData}>
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: 'rgba(245,240,232,0.4)', fontSize: 12}} />
                  <YAxis axisLine={false} tickLine={false} tick={{fill: 'rgba(245,240,232,0.4)', fontSize: 12}} label={{ value: 'hours', angle: -90, position: 'insideLeft', fill: 'rgba(245,240,232,0.3)', fontSize: 11 }} />
                  <Tooltip contentStyle={{background: '#151210', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px'}} itemStyle={{color: '#F59E0B'}} />
                  <Bar dataKey="hours" fill="#F59E0B" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </section>
        </div>

        <div className="db-col-right">
          <section className="db-section liquid-glass">
            <span className="section-label">// Skill profile</span>
            <h3>Distribution</h3>
            <div className="chart-wrapper" style={{ height: 180 }}>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={skillData} innerRadius={60} outerRadius={80} paddingAngle={5} dataKey="value">
                    {skillData.map((entry, index) => (<Cell key={`cell-${index}`} fill={entry.color} />))}
                  </Pie>
                  <Tooltip contentStyle={{background: '#151210', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px'}} />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="skill-legend">
              {skillData.map(s => (
                <div key={s.name} className="legend-item"><span className="legend-dot" style={{background: s.color}}></span>{s.name}</div>
              ))}
            </div>
          </section>

          <section className="db-section liquid-glass">
            <span className="section-label">// Practice arena</span>
            <h3>Daily Quiz</h3>
            <div className="quiz-card-mini">
              <p className="quiz-question">Which optimizer adapts learning rate per-parameter?</p>
              <div className="quiz-options">
                <label className={`quiz-option ${quizAnswer === 'adam' ? 'selected' : ''} ${quizSubmitted ? 'correct' : ''}`}>
                  <input type="radio" name="quiz" onChange={() => setQuizAnswer('adam')} disabled={quizSubmitted} /> Adam
                </label>
                <label className={`quiz-option ${quizAnswer === 'sgd' ? 'selected' : ''} ${quizSubmitted && quizAnswer === 'sgd' ? 'wrong' : ''}`}>
                  <input type="radio" name="quiz" onChange={() => setQuizAnswer('sgd')} disabled={quizSubmitted} /> SGD
                </label>
              </div>
              {!quizSubmitted ? (
                <button className="btn-accent-small" onClick={handleQuizSubmit} disabled={!quizAnswer}>Submit Answer</button>
              ) : (
                <div className="quiz-result">
                  <p className="quiz-explanation">Adam (Adaptive Moment Estimation) combines momentum with per-parameter learning rates using first and second moment estimates.</p>
                  <span className="xp-badge-float">+50 XP</span>
                  <button className="btn-accent-small" onClick={() => { setQuizSubmitted(false); setQuizAnswer(null); }}>Next Question →</button>
                </div>
              )}
            </div>
          </section>
        </div>
      </div>
    </>
  );

  const renderCourses = () => (
    <div className="tab-content">
      <h2 className="tab-title">My Courses</h2>
      <p className="tab-desc">Track your progress across all enrolled courses.</p>
      <div className="courses-grid">
        {COURSES.map(c => (
          <motion.div key={c.id} className="course-card liquid-glass" {...fadeUp} whileHover={{ y: -4 }}>
            <div className="course-card-top">
              <h3>{c.name}</h3>
              <span className="course-pct">{c.progress}%</span>
            </div>
            <p className="course-phase">{c.phase}</p>
            <div className="progress-bar-container"><div className="progress-bar-fill" style={{ width: `${c.progress}%` }}></div></div>
            <div className="course-phases">
              {c.phases.map((p, i) => (
                <span key={p} className={`phase-chip ${i < Math.ceil(c.progress / 25) ? 'done' : ''}`}>{p}</span>
              ))}
            </div>
            <button className="continue-btn-full" onClick={() => navigate('/player')}>{c.progress > 0 ? 'Continue Learning →' : 'Start Course →'}</button>
          </motion.div>
        ))}
      </div>
    </div>
  );

  const renderCohorts = () => (
    <div className="tab-content">
      <h2 className="tab-title">Live Cohorts</h2>
      <p className="tab-desc">Join expert-led live sessions with peers worldwide.</p>
      <div className="cohorts-grid">
        {COHORTS_DATA.map(c => (
          <motion.div key={c.id} className="cohort-card liquid-glass" {...fadeUp} whileHover={{ y: -4 }}>
            <div className="cohort-top"><span className="cohort-live-dot"></span> Upcoming</div>
            <h3>{c.title}</h3>
            <div className="cohort-meta">
              <div className="cohort-detail"><span className="detail-label">Mentor</span><span className="detail-val">{c.mentor}</span></div>
              <div className="cohort-detail"><span className="detail-label">Starts</span><span className="detail-val">{c.date}</span></div>
              <div className="cohort-detail"><span className="detail-label">Duration</span><span className="detail-val">{c.duration}</span></div>
              <div className="cohort-detail"><span className="detail-label">Spots Left</span><span className="detail-val spots">{c.spots}</span></div>
            </div>
            <button className="continue-btn-full">Join Cohort →</button>
          </motion.div>
        ))}
      </div>
    </div>
  );

  const renderPractice = () => (
    <div className="tab-content">
      <h2 className="tab-title">Practice Arena</h2>
      <p className="tab-desc">Sharpen your skills with adaptive quizzes and coding challenges.</p>
      <div className="practice-topics">
        {['Python Fundamentals', 'ML Algorithms', 'Neural Networks', 'Transformers', 'Prompt Engineering'].map(t => (
          <div key={t} className="practice-topic-card liquid-glass">
            <h4>{t}</h4>
            <p className="topic-questions">15 questions</p>
            <button className="btn-accent-small">Start Quiz →</button>
          </div>
        ))}
      </div>
      <section className="db-section liquid-glass" style={{ marginTop: 24 }}>
        <span className="section-label">// Coding challenge</span>
        <h3>Daily Challenge: Build a Simple Classifier</h3>
        <p className="challenge-desc">Write a function that implements a basic k-nearest neighbors classifier from scratch.</p>
        <div className="editor-container">
          <Editor height="250px" defaultLanguage="python" theme="vs-dark" value={'def knn_classify(X_train, y_train, x_test, k=3):\n    # Your code here\n    pass'} options={{ minimap: { enabled: false }, fontSize: 14, scrollBeyondLastLine: false }} />
        </div>
        <button className="btn-accent-small" style={{ marginTop: 12 }}>Submit Solution →</button>
      </section>
    </div>
  );

  const renderProjects = () => (
    <div className="tab-content">
      <h2 className="tab-title">My Projects</h2>
      <p className="tab-desc">Build, iterate, and showcase your AI portfolio.</p>
      <div className="projects-grid">
        {[
          { name: 'Neural Sentiment API', stack: ['PyTorch', 'FastAPI'], status: 'Live' },
          { name: 'GPT-2 Text Generator', stack: ['Transformers', 'Gradio'], status: 'In Progress' },
          { name: 'Image Classifier', stack: ['CNN', 'Flask'], status: 'Draft' },
        ].map(p => (
          <div key={p.name} className="project-card liquid-glass">
            <div className="project-top">
              <h4>{p.name}</h4>
              <span className={`status-badge ${p.status === 'Live' ? 'live' : p.status === 'In Progress' ? 'progress' : 'draft'}`}>{p.status}</span>
            </div>
            <div className="project-tags">{p.stack.map(t => <span key={t} className="p-tag">{t}</span>)}</div>
            <div className="project-actions">
              <button className="btn-ghost" onClick={() => navigate('/player')}>Open Editor</button>
              <button className="btn-ghost">Deploy</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderDeploy = () => (
    <div className="tab-content">
      <h2 className="tab-title">One-Click Deploy</h2>
      <p className="tab-desc">Ship your AI projects to the cloud instantly.</p>
      <section className="db-section liquid-glass">
        <div className="deploy-ui">
          <div className="deploy-form">
            <div className="form-group"><label>Project</label><select className="db-input"><option>Neural Sentiment API</option><option>GPT-2 Text Generator</option></select></div>
            <div className="form-group"><label>Target</label><input className="db-input" value="EduSpark Cloud" readOnly /></div>
            <button className="btn-deploy">Deploy Now 🚀</button>
          </div>
          <div className="deploy-status-panel">
            <div className="status-line"><span className="status-dot green"></span> Build Success</div>
            <div className="status-url">eduspark.app/projects/sentiment-api</div>
          </div>
        </div>
      </section>
    </div>
  );

  const renderLeaderboard = () => (
    <div className="tab-content">
      <h2 className="tab-title">Leaderboard</h2>
      <p className="tab-desc">See how you rank among the EduSpark community.</p>
      <div className="leaderboard-table liquid-glass">
        <div className="lb-header-row">
          <span>Rank</span><span>Name</span><span>XP</span><span>Streak</span>
        </div>
        {LEADERBOARD.map(u => (
          <div key={u.rank} className={`lb-row ${u.isYou ? 'you' : ''}`}>
            <span className="lb-rank">#{u.rank}</span>
            <span className="lb-name">{u.name}</span>
            <span className="lb-xp">{u.xp.toLocaleString()} XP</span>
            <span className="lb-streak">{u.streak} 🔥</span>
          </div>
        ))}
      </div>
    </div>
  );

  const renderSettings = () => (
    <div className="tab-content">
      <h2 className="tab-title">Settings</h2>
      <p className="tab-desc">Manage your profile and preferences.</p>
      <section className="db-section liquid-glass">
        <h3>Profile</h3>
        <div className="settings-form">
          <div className="form-group"><label>Display Name</label><input className="db-input" defaultValue="Alex Student" /></div>
          <div className="form-group"><label>Email</label><input className="db-input" defaultValue="alex@student.com" /></div>
          <div className="form-group"><label>Plan</label><input className="db-input" value="Pro Plan" readOnly /></div>
          <button className="btn-accent-small">Save Changes</button>
        </div>
      </section>
    </div>
  );

  const tabContent = {
    'Home': renderHome,
    'My Courses': renderCourses,
    'Live Cohorts': renderCohorts,
    'Practice': renderPractice,
    'Projects': renderProjects,
    'Deploy': renderDeploy,
    'Leaderboard': renderLeaderboard,
    'Settings': renderSettings,
  };

  return (
    <div className="dashboard-layout">
      <aside className="db-sidebar">
        <div className="db-logo" onClick={() => navigate('/')} style={{cursor:'pointer'}}>
          <div className="logo-circle">e</div>
        </div>
        <nav className="db-nav">
          {navItems.map((item) => (
            <button key={item.name} className={`db-nav-item ${activeTab === item.name ? 'active' : ''}`} onClick={() => setActiveTab(item.name)}>
              <span className="nav-icon">{item.icon}</span>{item.name}
            </button>
          ))}
        </nav>
        <div className="db-user-profile">
          <div className="user-avatar">AS</div>
          <div className="user-info">
            <span className="user-name">Alex Student</span>
            <span className="user-plan">Pro Plan</span>
          </div>
        </div>
      </aside>

      <main className="db-main">
        <header className="db-header">
          <h1>{activeTab === 'Home' ? 'Dashboard' : activeTab}</h1>
          <div className="db-header-actions">
            <button className="btn-secondary" onClick={() => setActiveTab('Projects')}>New Project +</button>
          </div>
        </header>
        <div className="db-content">{tabContent[activeTab]()}</div>
      </main>
    </div>
  );
};

export default Dashboard;
