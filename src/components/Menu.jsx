import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <>
      <Link to="/create">Create Table</Link>
      <Link to="/edit">Edit Table</Link>
    </>
  );
};

export default Menu;
