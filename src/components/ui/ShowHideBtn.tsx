import { type ShowHideBtnProps } from '../../types'

export default function ShowHideBtn({ condition, handleClick }: ShowHideBtnProps) {

  return (
    <>
      <button className="show-hide-btn" onClick={handleClick}>
        {condition ? 'Показать' : 'Скрыть'}
      </button>
    </>
  )
}