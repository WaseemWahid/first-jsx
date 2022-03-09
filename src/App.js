
import './App.css';
import FIrstJsx from './Component/FIrstJsx';



function App() {
  return (

    <div className="App">
      <FIrstJsx title = "Hello Dojo!" subtitle = "Things I need to do" todo ="Learn React" />
      <FIrstJsx todo = "Climb Mt. Everest" />
      <FIrstJsx todo = "Run a marathon" />
      <FIrstJsx todo = "Feed the dogs" />
    </div>
  );
}

export default App;
