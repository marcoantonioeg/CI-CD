import './App.css'

function App() {
  return (
    <div className="app-content">
      <div className="subtitle">DevOps Automations</div>
      <h1>S3-Triggered Pipeline</h1>
      <p>Continuous Integration & Deployment without the Git Overhead.</p>

      <div className="pipeline-container">
        <div className="step">
          <div className="step-icon">📦</div>
          <h3>Local Zip</h3>
          <p>Compress your project directly from the terminal.</p>
          <div className="badge">1. CLI Action</div>
        </div>

        <div className="connector">➜</div>

        <div className="step">
          <div className="step-icon">☁️</div>
          <h3>AWS S3</h3>
          <p>Upload the zip. S3 Event Notifications trigger the pipeline.</p>
          <div className="badge">2. Trigger</div>
        </div>

        <div className="connector">➜</div>

        <div className="step">
          <div className="step-icon">⚙️</div>
          <h3>Build & Deploy</h3>
          <p>AWS CodeBuild compiles and syncs to your host.</p>
          <div className="badge">3. Automation</div>
        </div>

        <div className="connector">➜</div>

        <div className="step">
          <div className="step-icon">🚀</div>
          <h3>Live Site</h3>
          <p>Your application is updated automatically in seconds.</p>
          <div className="badge">4. Result</div>
        </div>
      </div>

      <div className="feature-list">
        <div className="feature">
          <h4>Consolidated Workflow</h4>
          <p>One command to zip and ship. No need to manage complex Git flows for simple prototypes.</p>
        </div>
        <div className="feature">
          <h4>Feedback Loops</h4>
          <p>Instant deployment logs and rapid updates facilitate faster development cycles.</p>
        </div>
        <div className="feature">
          <h4>Cloud Native</h4>
          <p>Leverages industry-standard AWS services (S3, Lambda, CodeBuild).</p>
        </div>
      </div>

      <footer style={{ marginTop: '4rem', opacity: 0.6, fontSize: '0.9rem' }}>
        Developed by <strong style={{ color: 'var(--accent)' }}>Marco Antonio Estrello</strong>
      </footer>
    </div>
  )
}

export default App
