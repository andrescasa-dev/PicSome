import { useContext } from 'react'
import Image from '../components/Image'
import { userContext } from '../context/userContext'

const Photos = props => {
  const { photos } = useContext(userContext)
  const imagesDom = photos.map(photoData => <Image key={photoData.id} {...photoData} />)
  return (
    <main className='main-grid '>
      <div className='col-start-2 col-end-[-2] photos'>
        {imagesDom}
        </div>
    </main>
  )
}

export default Photos
