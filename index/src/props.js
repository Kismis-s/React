const Props = ({ list, title, handleDelete }) => {
  //Deconstruction to make it easier or you can just write (props)
  //   const list = props.list;
  //   const title = props.title;
  return (
    <div className="list">
        {/* its dynamic value do ofc it should be inside paranthesis 
    We are using map method of JS so that we can iterate through each value in the array*/}
      {list.map((lists) => (
        //key is essential because it is what react uses to keep track of each item in the dom
        <div className="blogs" key={lists.id}>
          <h1>{title}</h1>
          <h2>{lists.Name}</h2>
          <p>Age: {lists.Age}</p>
          <p>Address: {lists.Address}</p>
          <button onClick={handleDelete}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default Props;
