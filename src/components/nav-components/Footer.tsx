import Logo from "./Logo";
import Navigation from "./Navigation"
import Copyright from "./Copyright";
import Wrapper from "../ui/Wrapper";

export default function Footer() {

  return (
    <footer className="footer">
      <Wrapper>
        <div className="footer-container">
          <div className="footer-flex">
            <h3 className="footer-title">Навигация</h3>
            <Navigation />
          </div>
          <Logo width="150" height="150" />
        </div>
        <Copyright year="2025" />
      </Wrapper>
    </footer>
  );
}