import React from 'react';
import { motion } from 'framer-motion';
import './DashboardPreview.css';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.4, ease: 'easeOut', delay },
});

const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const barHeights = [40, 65, 30, 85, 55, 95, 70];

const DashboardPreview = () => {
  return (
    <section className="dashboard-section">
      <div className="container">
        {/* Header */}
        <motion.div className="db-header" {...fadeUp(0)}>
          <span className="db-kicker liquid-glass">// Your workspace</span>
          <h2 className="db-heading">
            Your Learning <em>Hub</em>
          </h2>
          <p className="db-desc">Everything you need to master your craft, in one place.</p>
        </motion.div>

        {/* Dashboard frame */}
        <motion.div className="dash-frame liquid-glass" {...fadeUp(0.15)}>
          {/* Chrome bar */}
          <div className="dash-chrome">
            <div className="chrome-dots">
              <span className="cdot cdot-r"></span>
              <span className="cdot cdot-y"></span>
              <span className="cdot cdot-g"></span>
            </div>
            <div className="chrome-url">
              <span>app.eduspark.com/dashboard</span>
            </div>
          </div>

          <div className="dash-body">
            {/* Sidebar */}
            <aside className="dash-sidebar">
              <div className="sb-logo">E<span style={{ opacity: 0.5 }}>S</span></div>
              <nav className="sb-nav">
                <div className="sb-item active">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>
                  Overview
                </div>
                <div className="sb-item">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="22,12 18,12 15,21 9,3 6,12 2,12"/></svg>
                  Roadmap
                </div>
                <div className="sb-item">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14,2 14,8 20,8"/></svg>
                  Projects
                </div>
                <div className="sb-item">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/></svg>
                  Quizzes
                </div>
                <div className="sb-item">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>
                  Mentorship
                </div>
              </nav>
              <div className="sb-user">
                <div className="sb-avatar">A</div>
                <span>Alex Student</span>
              </div>
            </aside>

            {/* Main */}
            <main className="dash-main">
              <div className="dash-top">
                <div>
                  <h3 className="dash-greeting">Welcome back, Alex</h3>
                  <p className="dash-date">Monday, April 27</p>
                </div>
                <div className="dash-pills">
                  <span className="pill liquid-glass">🔥 14 Day Streak</span>
                  <span className="pill liquid-glass">⭐ 2,450 XP</span>
                </div>
              </div>

              <div className="dash-grid">
                {/* Focus card */}
                <div className="dcard liquid-glass focus-card">
                  <div className="focus-top">
                    <span className="focus-badge liquid-glass">In Progress</span>
                    <span className="focus-pct">65%</span>
                  </div>
                  <h4>Neural Network <em>Fundamentals</em></h4>
                  <p className="focus-meta">Module 3 of 8 · 12 lessons remaining</p>
                  <div className="focus-bar">
                    <div className="focus-bar-fill" style={{ width: '65%' }}></div>
                  </div>
                  <button className="resume-btn">
                    Resume Lesson
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M7 17L17 7" /><path d="M7 7h10v10" />
                    </svg>
                  </button>
                </div>

                {/* Upcoming */}
                <div className="dcard liquid-glass upcoming-card">
                  <h4><em>Upcoming</em></h4>
                  <div className="event-item">
                    <div className="event-dot"></div>
                    <div className="event-info">
                      <span className="event-title">Mentor Office Hours</span>
                      <span className="event-time">Today, 4:00 PM</span>
                    </div>
                  </div>
                  <div className="event-item">
                    <div className="event-dot"></div>
                    <div className="event-info">
                      <span className="event-title">Project 2 Due</span>
                      <span className="event-time">Tomorrow, 11:59 PM</span>
                    </div>
                  </div>
                  <div className="event-item">
                    <div className="event-dot"></div>
                    <div className="event-info">
                      <span className="event-title">Live Cohort Session</span>
                      <span className="event-time">Wed, 6:00 PM</span>
                    </div>
                  </div>
                </div>

                {/* Activity chart */}
                <div className="dcard liquid-glass activity-card">
                  <div className="activity-header">
                    <h4>Weekly <em>Activity</em></h4>
                    <span className="activity-total">18.5 hrs this week</span>
                  </div>
                  <div className="chart-container">
                    {weekDays.map((day, i) => (
                      <div key={day} className="chart-col">
                        <div className="chart-bar-wrap">
                          <div className="chart-bar" style={{ height: `${barHeights[i]}%` }}></div>
                        </div>
                        <span className="chart-label">{day}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </main>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DashboardPreview;
