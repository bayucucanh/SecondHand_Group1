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
      <Rect x="3" y="10" rx="2" ry="2" width="250" height="110" />
      <Rect x="3" y="110" rx="2" ry="2" width="345" height="25" />
      <Rect x="3" y="145" rx="1" ry="2" width="100" height="10" />
      <Rect x="3" y="165" rx="2" ry="2" width="125" height="15" />
    </ContentLoader>
  );
}

export default Loader;
