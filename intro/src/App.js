import logo from './logo.svg';
import './App.css';

function App() {

  let ian = "Hello"
  const eric = "Goodbye"
  
  let thisIsAFunction = () => {
    console.log(ian)
    console.log(eric);
    return 22
  }

  // let arrayOfStrings = ["abc", "def", "ghi"]
  // let result = arrayOfStrings.map(thisIsAFunction)
  // console.log(result)


  return (
    <div className="App">
      <h1>These are the topics to know</h1>
      <button onClick={ thisIsAFunction }>
        This is a button
      </button>
      <ul>
        <li>Callbacks and Javascript functions</li>
        <li>Array enumerable methods (map, sort, filter, find)</li>
        <li>ES6 (Spread operator + Destructuring) </li>
        <li>Fetch</li>
        <li>Closure + Scope</li>
        <li>Hashketball (Array of objects, objects of objects, objects of arrays, etc.) </li>
      </ul>
    </div>
  );
}

export default App;
