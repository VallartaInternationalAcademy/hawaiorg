import icon from "../assets/images/icon.png";

const MenuHeader = () => {
  return (
    <div className="navbar bg-base-100">
      <div>
        <div className="flex-1">
          <img src={icon} alt="" style={{ height: "80px" }} />
        </div>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 text-2xl text-gray-800">
          <li>
            <a>HOME</a>
          </li>
          <li>
            <a>ABOUT US</a>
          </li>
          <li>
            <a>WHAT DO WE DO?</a>
          </li>
          <li>
            <button className="bg-main rounded-3xl text-white">DONATE</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MenuHeader;
