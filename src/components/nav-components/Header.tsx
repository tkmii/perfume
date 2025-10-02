import { Link } from "react-router-dom";
import Wrapper from "../ui/Wrapper";
import Logo from "./Logo";
import NavItem from "./NavItem";

export default function Header() {

  return (
    <header className="header">
      <Wrapper>
        <div className="header-container">
          <Logo width="100" height="100" />
          <div className="header-btns">
            <NavItem className="header-btn" link="/cart" title="В корзину" />
            <NavItem className="header-btn" link="/catalog" title="В каталог" />
          </div>
        </div>
      </Wrapper>
    </header>
  );
}