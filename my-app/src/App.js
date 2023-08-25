import icon1 from './image/icon1.png';
import icon2 from './image/icon2.png';
import icon3 from './image/icon3.png';
import icon4 from './image/icon4.png';
import ironhack from './image/ironhack-logo-xs.png';
import menu from './image/menu-top-xs.png';
import './App.css';

function App() {
  return (
    
    <div className="App">
      <div className="App1">
        <img src={ironhack} className="ironhack" alt="ironhack" />
        <img src={menu} className="menu" alt="menu" />
        <p className="p">
          Say hello to </p>
        <p2 className="p2">
          ReactJS </p2>
        
        <p1 className="p1">
          You will learn how to use <br />
          the most popular frontend library, <br />
          and become a super Ninja developer.
        </p1>
        <br>
        </br>
        <a
          className="App-link"
          href="https://google.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Awesome!
        </a>
        </div>

        <div className="App2">
        <img src={icon1} className="icon1" alt="icon1" />
        <img src={icon2} className="icon2" alt="icon2" />
        <img src={icon3} className="icon3" alt="icon3" />
        <img src={icon4} className="icon4" alt="icon4" />
        <p3 className="p3">
          Declarative 
        </p3>
        <p31 className="p31">
          React makes it <br/>
          painless to create <br/>
          interactive Uls.
        </p31>

        <p4 className="p4">
          Components 
        </p4>
        <p41 className="p41">
          Build encapsulated <br/>
          components that <br/>
          manage their state.
        </p41>

        <p5 className="p5">
          Single-Way 
        </p5>
        <p51 className="p51">
          A set of inmutable <br/>
          values are passed to <br/>
          the component´s.
        </p51>

        <p6 className="p6">
          JSX
        </p6>
        <p61 className="p61">
          Statically-typed, <br/>
          designed to run on <br/>
          modern browsers.
        </p61>

        </div>
      
    </div>
  );
}

export default App;


