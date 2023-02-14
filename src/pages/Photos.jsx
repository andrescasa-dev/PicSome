import { useContext } from 'react'
import Image from '../components/Image'
import { userContext } from '../context/userContext'

const Photos = props => {
  const { photos } = useContext(userContext)
  const imagesDom = photos.map(imageData => <Image key={imageData.id} {...imageData} />)
  return (
    <main className='flex flex-wrap items-center justify-between px-10 pb-10'>
      {imagesDom}
    </main>
  )
}

export default Photos
