import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
      <nav className="navigation" >
        <button className="navigation-btn" href="/html/">HTML</button > |
        <button className="navigation-btn" href="/css/">CSS</button > |
        <button className="navigation-btn" href="/js/">JavaScript</button > |
        <button className="navigation-btn" href="/python/">Python</button >
      </nav>
      <div className='containe r' >
        <div className="container-element_round" >element1 </div>
        <div className="container-element_square"> element2</div>
      </div>
      <div class="grid-container">
          <div class="grid-item">1</div>
          <div class="grid-item">2</div>
          <div class="grid-item">3</div>
          <div class="grid-item">4</div>
          <div class="grid-item">5</div>
          <div class="grid-item">6</div>
          <div class="grid-item">7</div>
          <div class="grid-item">8</div>
          <div class="grid-item">9</div>
      </div>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <footer>
        <h3>Footer</h3>
        <button>New Button</button>
      </footer>
    </div>
  );
}

export default App;
