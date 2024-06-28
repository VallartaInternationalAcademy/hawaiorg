import icon from "../assets/images/icon.png";

const MenuHeader = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <img
          src={icon}
          alt=""
          className="h-12 sm:h-12 md:h-[2rem] lg:h-[2rem] xl:h-[4rem]"
        />
      </div>
      <div className="flex-none lg:hidden">
        <div className="dropdown dropdown-end">
          <label tabIndex="0" className="btn btn-ghost btn-square">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </label>
          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
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
              <button className="bg-main rounded-3xl text-white w-full">
                DONATE
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex-none hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-2xl text-gray-800">
          <li>
            <span>HOME</span>
          </li>
          <li>
            <span>ABOUT US</span>
          </li>
          <li>
            <span>WHAT DO WE DO?</span>
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
