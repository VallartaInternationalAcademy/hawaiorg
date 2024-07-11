import icon from "../assets/images/icon.png";

const MenuHeader = () => {
  return (
    <div className="navbar bg-base-100 sticky-header">
      <div className="flex-1">
        <img
          src={icon}
          alt="Logo"
          className="h-6 sm:h-12 md:h-[2rem] lg:h-[2rem] xl:h-[4rem]"
        />
      </div>
      <div className="flex-none lg:hidden">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-square">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
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
              <button className="bg-main rounded-3xl text-white p-2">
                DONATE
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div className="hidden lg:flex flex-none">
        <ul className="menu menu-horizontal p-0 text-md sm:text-lg md:text-md lg:text-xl xl:text-2xl">
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
            <button className="bg-main rounded-3xl text-white p-2">
              DONATE
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MenuHeader;
