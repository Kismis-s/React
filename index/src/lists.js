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
  //We are using this function here, because we do not want to delete the data as a whole so we need to use set function, so that if refereshed, it goes back to initial list
  const handleDelete = (id) => {
    const newList = list.filter((list) => list.id !== id); //It adds the elemnts that do not match with the id to newList
    setList(newList); //It updates the list on html
  };

  return (
    <div className="lists">
      <Props list={list} title="Students" handleDelete={handleDelete} />
      {/* Reusing components */}
      <Props
        list={list.filter((lists) => lists.Age < 20)}
        title="Students under 20"
      />
    </div>
  );
};

export default Lists;
