//Handling click events
const Home = () => {
  const handleClick = () => {
    //A function to handle what happens when clicking on the button
    alert("Welcome to my web page!");
  };
  //After clicking, we automatically get the first event object i.e. e
  //   const handleClick = (e) => {
  //     console.log("Welcome to my web page!", e);
  //   };
  //On the ocassion we have to pass an arguement to the function, we wrap it in an annoymus function
  const handleClickAgain = (name, e) => {
    //A function to handle what happens when clicking on the button
    console.log("Hey! " + name, e.target); //This property of the event object refers to the DOM element that triggered the event.
  };
  return (
    <div className="home">
      <h1>My first React App</h1>
      {/* Using onClick function to give a reference to handleClick function, don not use handleClick() because it 
      invokes the function immediately, we just wanna reference it not invoke. So, on the ocassion the button is clicked, 
      it invokes the function and the message is alerted */}
      <button onClick={handleClick}>Click me</button>
      {/* By wrapping it in annoymous function like this, it is not invoked immediately, instead we are provididng a reference so it invokes after being clicked */}
      {/* In this case, the annoymous function gets the event object */}
      <button
        onClick={(e) => {
          handleClickAgain("kismis", e);
        }}
      >
        Click me Again
      </button>
    </div>
  );
};

export default Home;
