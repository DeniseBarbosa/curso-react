import './App.css';
import {useRef} from 'react';

const musicaUrl = '';
function App() {
  const audioRef = useRef(null);

  function pouse() {
    audioRef.current.pouse();
    
  }
  function play() {
    audioRef.current.play();
  }
  function stop() {
    audioRef.current.pouse();
    audioRef.current.currentTime = 0;

  }


  
  return (
    <div className="App">
      <audio src='musicaUrl' ref={audioRef}></audio>
      <div>
        <button onClick={()=> play()} >Play</button>
        <button onClick={()=> pouse()} >Pouse</button>
        <button onClick={()=> stop()} >Stop</button>
      </div>
    </div>
  );
}

export default App;
