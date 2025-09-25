import { ErrorProps } from "../../types"

export default function Error({ text = 'Произошла ошибка' }: ErrorProps) {
  return (
    <div className="error">{text}</div>
  )
}