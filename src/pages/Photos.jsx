import { useContext } from 'react'
import Image from '../components/Image'
import { userContext } from '../context/userContext'

const Photos = props => {
  const { photos, updatePhoto } = useContext(userContext)
  const imagesDom = photos.map(photoData => <Image key={photoData.id} updatePhoto={updatePhoto} {...photoData} />)
  return (
    <main className='flex flex-wrap items-center justify-between px-10 pb-10'>
      {imagesDom}
    </main>
  )
}

export default Photos
