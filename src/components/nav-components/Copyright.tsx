import { type CopyrightProps } from "../../types"

export default function Copyright({ year }: CopyrightProps) {

  return (
    <div className="copyright">&copy; {year} ООО Perfume shop. Все права защищены.</div>
  );
}