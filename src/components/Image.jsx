import PropTypes from 'prop-types'

const Image = ({ url, id }) => {
  return (
    <div className="">
      <img className="w-full max-w-md max-h-[20rem]" src={url} alt={`image number ${id}`} />
    </div>
  )
}

Image.propTypes = {
  url: PropTypes.string,
  id: PropTypes.string
}

export default Image
