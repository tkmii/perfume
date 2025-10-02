import NavItem from "./NavItem";

export default function Navigation() {

  return (
    <div className="navigation">
      <NavItem title="Главная" link="/" />
      <NavItem title="Корзина" link="/cart" />
      <NavItem title="Каталог" link="/catalog" />
    </div>
  );
}