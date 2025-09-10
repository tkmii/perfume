export default function ShowHideBtn({ condition, handleClick }) {

  return (
    <>
      <button className="show-hide-btn" onClick={handleClick}>
        {condition ? 'Показать' : 'Скрыть'}
      </button>
    </>
  )
}