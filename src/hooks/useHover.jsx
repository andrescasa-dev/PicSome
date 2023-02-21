import { useEffect, useRef, useState } from 'react'

const useHover = () => {
  const [isHovered, setIsHovered] = useState(false)
  const refElement = useRef(null)

  const toggleIsHovered = (e) => setIsHovered(prevState => !prevState)

  useEffect(() => {
    const element = refElement.current
    element.addEventListener('mouseenter', toggleIsHovered)
    element.addEventListener('mouseleave', toggleIsHovered)
    return () => {
      element.removeEventListener('mouseenter', toggleIsHovered)
      element.removeEventListener('mouseleave', toggleIsHovered)
    }
  }, [])

  return { isHovered, refHover: refElement }
}

export default useHover
