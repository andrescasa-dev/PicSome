import { useContext } from 'react'
import Image from '../components/Image'
import { userContext } from '../context/userContext'

const Photos = props => {
  const { photos } = useContext(userContext)
  const imagesDom = photos.map(photoData => <Image key={photoData.id} {...photoData} />)
  return (
    <main className='flex flex-wrap items-center justify-between px-10 pb-10'>
      {imagesDom}
    </main>
  )
}

export default Photos
