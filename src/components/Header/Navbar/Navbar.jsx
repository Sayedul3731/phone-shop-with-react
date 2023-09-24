import { NavLink } from "react-router-dom";
import Logo from "./Logo";


const Navbar = () => {
    return (
        <nav className="flex items-center justify-between shadow-md py-6 px-5">
            <Logo></Logo>
            <ul className="flex gap-5">
                <li>
                    <NavLink
                        to="/"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-green-400 underline" : ""
                        }
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/favorites"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-green-400 underline" : ""
                        }
                    >
                        Favorites
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/login"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-green-400 underline" : ""
                        }
                    >
                       Login
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;