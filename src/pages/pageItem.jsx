import { useParams } from 'react-router-dom';

export function PageItem() {
  const { id } = useParams();
  
  console.log(id)

  return (
    <>
      PageItem {id}
    </>
  )
}