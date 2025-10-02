import { NavLink } from "react-router-dom";
import { type NavItemProps } from "../../types"

export default function NavItem({ link, title, className = 'navigation-item' }: NavItemProps) {
  return (
    <NavLink 
      to={link} 
      className={({ isActive }) =>
        `${className} ${isActive ? "active" : ""}`
      }
    >
      {title}
    </NavLink>
  );
}