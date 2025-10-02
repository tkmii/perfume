import { Link } from "react-router-dom";
import { type LogoProps } from "../../types"

export default function Logo({ width, height }: LogoProps) {


  return (
    <Link to='/' className="logo">
      <img src="/src/assets/images/logo.png" alt="" width={width} height={height} />
    </Link>
  );
}