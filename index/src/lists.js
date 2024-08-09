import { useState } from "react";
import Props from "./props";

const Lists = () => {
  //We use useState because if the value of these objects change, react won't be able to update the changes
  const [list, setList] = useState([
    //Array of objects
    { Name: "Krishma", Age: 20, Address: "Kapan", id: 1 }, //id should be unique or it wont work
    { Name: "Bombhu", Age: 19, Address: "Chandol", id: 2 },
    { Name: "Jenisha", Age: 20, Address: "Kumarigal", id: 3 },
  ]);
  return (
    <div className="lists">
      {/* its dynamic value do ofc it should be inside paranthesis 
    We are using map method of JS so that we can iterate through each value in the array*/}
      {/* {list.map((lists) => (
        //key is essential because it is what react uses to keep track of each item in the dom
        <div className="blogs" key={lists.id}>
          <h1>{lists.Name}</h1>
          <p>Age: {lists.Age}</p>
          <p>Address: {lists.Address}</p>
        </div>
      ))} */}
      <Props list={list} title="Students" />
      {/* Reusing components */}
      <Props
        list={list.filter((lists) => lists.Age === 19)}
        title="Students under 20"
      />
    </div>
  );
};

export default Lists;
