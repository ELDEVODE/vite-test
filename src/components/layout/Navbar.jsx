import { Link } from 'react-router-dom';
function Navbar() {
  return (
    <div className="navbar bg-base-300">
      <div className="navbar-start">
        <div className="dropdown">
          <label
            tabindex="0"
            className="btn btn-ghost btn-circle hover:text-info"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
          <ul
            tabindex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-300 rounded-box w-52"
          >
            <li className="hover:text-accent">
              <Link to="/">Home</Link>
            </li>

            <li className="hover:text-accent">
              <Link to="/search">Search</Link>
            </li>

            <li className="hover:text-accent">
              <Link to="/random">Random</Link>
            </li>

            <li className="hover:text-accent">
              <Link to="/about">About</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <Link
          to="/"
          className="btn btn-ghost normal-case text-xl hover:text-accent-focus"
        >
          InfoNime
        </Link>
      </div>
      <div className="navbar-end">
        <button className="btn btn-ghost btn-circle hover:text-info">
          <Link to="/search">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </Link>
        </button>
      </div>
    </div>
  );
}
export default Navbar;
