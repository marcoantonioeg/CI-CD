import './App.css'

function App() {
  return (
    <div className="app-content">
      <div className="subtitle">GitHub Automation</div>
      <h1>Actions CI/CD Pipeline</h1>
      <p>Automated testing, building, and deployment with every push.</p>

      <div className="pipeline-container">
        <div className="step">
          <div className="step-icon">💻</div>
          <h3>Local Code</h3>
          <p>Develop features and commit your changes locally.</p>
          <div className="badge">1. Commit</div>
        </div>

        <div className="connector">➜</div>

        <div className="step">
          <div className="step-icon">🚀</div>
          <h3>Git Push</h3>
          <p>Upload your code to GitHub to trigger the workflow.</p>
          <div className="badge">2. Trigger</div>
        </div>

        <div className="connector">➜</div>

        <div className="step">
          <div className="step-icon">🤖</div>
          <h3>GitHub Actions</h3>
          <p>Automated runner executes build, test, and lint jobs.</p>
          <div className="badge">3. Workflow</div>
        </div>

        <div className="connector">➜</div>

        <div className="step">
          <div className="step-icon">🌐</div>
          <h3>Deployment</h3>
          <p>Your app is published to production automatically.</p>
          <div className="badge">4. Delivery</div>
        </div>
      </div>

      <div className="feature-list">
        <div className="feature">
          <h4>Continuous Integration</h4>
          <p>Run automated tests on every pull request to ensure code quality and stability.</p>
        </div>
        <div className="feature">
          <h4>Automated Workflows</h4>
          <p>Define your SDLC as code using YAML files within your repository.</p>
        </div>
        <div className="feature">
          <h4>Fast Feedback</h4>
          <p>Get immediate results on build status directly in your GitHub interface.</p>
        </div>
      </div>

      <footer style={{ marginTop: '4rem', opacity: 0.6, fontSize: '0.9rem' }}>
        Developed by <strong style={{ color: 'var(--accent)' }}>Marco Antonio Estrello</strong>
      </footer>
    </div>
  )
}

export default App
