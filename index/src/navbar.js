//The inline css should be in double {} because it is an object, we are using key: value paring
const Navbar = () => {
  return (
    <div className="nav">
      <a
        href="./"
        style={{
          color: "red",
          fontSize: "30px",
          margin: "20px",
        }}
      >
        Home
      </a>
      <a
        href="./"
        style={{
          color: "green",
          fontSize: "30px",
          margin: "20px",
        }}
      >
        Contact
      </a>
      <a
        href="./"
        style={{
          color: "orange",
          fontSize: "30px",
          margin: "20px",
        }}
      >
        More
      </a>
    </div>
  );
};

export default Navbar;
