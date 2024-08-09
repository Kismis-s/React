//Hook a.k.a useState is a way to or a special type of function that allows us to make reactive values
import { useState } from "react"; //importing

const State = () => {
  //We are using array to store values because useState() is a function and we dont want to evoke it
  //We use an array to store the two values that the hook returns i.e. the initial value and the function to change the value
  const [name, setName] = useState("kismis"); //The value in useState is the initial value displayed in the browser
  const [age, setAge] = useState(20);
  const handleClick = () => {
    //Action to be performed after event
    setName("bombhu"); //Using set function to change the values in the browser
    setAge(19);
  };
  return (
    <div className="events">
      <p>
        {name} is {age} years old.
      </p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

export default State;
