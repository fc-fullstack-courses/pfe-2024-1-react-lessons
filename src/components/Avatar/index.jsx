import React from 'react';

const Avatar = (props) => {
  const { src, alt } = props;

  return (
    <img
      src={src}
      alt={alt}
      title={alt}
      style={{ width: '64px', height: '64px', borderRadius: '50%' }}
    />
  );
};

export default Avatar;
