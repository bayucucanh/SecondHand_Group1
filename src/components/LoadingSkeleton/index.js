import React from 'react';
import ContentLoader, { Rect, Circle, Path } from 'react-content-loader/native';
import { SIZES } from '../../constant';

function Loader(props) {
  return (
    <ContentLoader
      speed={2}
      width={SIZES.width * 0.4}
      height={250}
      viewBox={`0 0 ${SIZES.width * 0.4} 250`}
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      {...props}
    >
      <Rect x="3" y="160" rx="2" ry="2" width="250" height="20" />
      <Rect x="0" y="60" rx="2" ry="2" width="345" height="85" />
      <Rect x="3" y="191" rx="2" ry="2" width="150" height="15" />
      <Rect x="-1" y="217" rx="2" ry="2" width="345" height="25" />
      <Circle cx="20" cy="20" r="20" />
    </ContentLoader>
  );
}

export default Loader;
