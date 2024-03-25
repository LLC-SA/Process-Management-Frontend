import { NavLink } from "react-router-dom";
import { HiOutlineHome, HiOutlineHomeModern } from "react-icons/hi2";
import { GiChemicalTank } from "react-icons/gi";
import { TfiLayoutColumn3 } from "react-icons/tfi";
import { FaSprayCan } from "react-icons/fa";
import { PiPackageDuotone } from "react-icons/pi";

function MainNav() {
  const navLinkStyle = "flex items-center gap-5 px-3 py-5 transition-all";

  return (
    <nav>
      <ul
        className="flex flex-col gap-4
      font-roboto text-lg font-medium text-gray-700"
      >
        <li>
          <NavLink className={navLinkStyle} to="/dashboard">
            <HiOutlineHome />
            <span>Principal</span>
          </NavLink>
        </li>
        <li>
          <NavLink className={navLinkStyle} to="/silos">
            <GiChemicalTank />
            <span>Almacenamiento</span>
          </NavLink>
        </li>
        <li>
          <NavLink className={navLinkStyle} to="/standardization">
            <HiOutlineHomeModern />
            <span>Estandarización</span>
          </NavLink>
        </li>
        <li>
          <NavLink className={navLinkStyle} to="/evaporation">
            <TfiLayoutColumn3 />
            <span>Evaporación</span>
          </NavLink>
        </li>{" "}
        <li>
          <NavLink className={navLinkStyle} to="/crystallizer">
            <TfiLayoutColumn3 />
            <span>Cristalizadores</span>
          </NavLink>
        </li>
        <li>
          <NavLink className={navLinkStyle} to="/spray">
            <FaSprayCan />
            <span>Spray</span>
          </NavLink>
        </li>
        <li>
          <NavLink className={navLinkStyle} to="/packaging">
            <PiPackageDuotone />
            <span>Envase</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default MainNav;
