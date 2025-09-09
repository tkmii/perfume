export default function Error({ text = 'Произошла ошибка' }) {
  return (
    <div className="error">{text}</div>
  )
}