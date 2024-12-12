import PropTypes from 'prop-types';

const Avatar = (props) => {
  const { alt } = props;

  return (
    <img
      // src={src}
      // alt={alt}
      {...props}
      title={alt}
      style={{ width: '64px', height: '64px', borderRadius: '50%' }}
    />
  );
};

Avatar.propTypes = {
  alt: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired
}

export default Avatar;
