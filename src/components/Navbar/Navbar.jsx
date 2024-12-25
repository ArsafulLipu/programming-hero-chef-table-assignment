import icon from "../../assets/images/Recipe Calories.png";
import profile from "../../assets/images/Frame 5.png";
import { CiSearch } from "react-icons/ci";
import "./Navbar.css"
const Navbar = () => {
  return (
    <div className="flex justify-between my-12">
      <div>
        <img src={icon} alt="" />
      </div>
      <div className="flex space-x-12">
        <a href="">Home</a>
        <a href="">Recipes</a>
        <a href="">About</a>
        <a href="">Search</a>
      </div>
      <div className="flex space-x-4">
        <input type="text" placeholder="Search..." className="search-input" />
        <img src={profile} alt="" />
      </div>
    </div>
  );
};

export default Navbar;
