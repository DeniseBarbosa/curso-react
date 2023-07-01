import './App.css';


function App() {

    function input() {
      const input = document.querySelector('input');
      const h1 = document.querySelector('h1');
      h1.innerText = input.value
    }

    
 
  return (
    <div className="App">
      <input type="text" placeholder='Digite alguma coisa'
        onChange={()=>input()}
      />
      <h1> </h1>
    </div>
  );
}

export default App;