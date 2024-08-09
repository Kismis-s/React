import "./index";
import Lists from "./lists";

function App() {
  //we can pass dynamic data, it should be in curly braces
  // const name = "Krishma";
  // const url = "http://www.instagram.com";
  return (
    <div className="App">
      {/* <div className="content">
        <h1>My First React App</h1>
        <p>My name is {name}</p>
        <p>{"I am 20 years old."}</p>
        <p>{[1, 3, 5]}</p>
        <a href={url}>My instagram</a>
        <p>Number of views: {Math.random()}</p>
      </div> */}
      {/* <div className="home">
        <Home></Home>
      </div>
      <div className="state">
        <State />
      </div> */}
      <Lists/>
    </div>
  );
}

export default App;
