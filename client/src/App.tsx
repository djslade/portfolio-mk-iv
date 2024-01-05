import "./styles/main.scss";

function App() {
  return (
    <div className="app-container">
      <div className="stars">
        <div className="star" />
        <div className="star" />
        <div className="star" />
        <div className="star" />
        <div className="star" />
      </div>
      <main className="main">
        <div className="top-bar">
          <nav className="nav">
            <button>About</button>
            <button>Contact</button>
            <button>Resume</button>
          </nav>
        </div>
        <div className="content">
          <h2 className="landing-text">
            Hello, my name is <span>David</span>. I create{" "}
            <span>beautiful, full stack</span> web experiences with{" "}
            <span>secure</span> technologies and <span>clean and scalable</span>{" "}
            code.
          </h2>
          <div className="landing-button-wrapper">
            <button>Get in touch</button>
            <button className="primary-cta">See my work</button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
