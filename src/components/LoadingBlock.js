import ContentLoader from "react-content-loader";
import React from 'react';

export function LoadingBlock() {
    return (
      <ContentLoader 
      speed={2}
      width={290}
      height={380}
      viewBox="0 0 240 315"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      >
      <circle cx="113" cy="83" r="83" /> 
      <rect x="25" y="178" rx="6" ry="6" width="181" height="28" /> 
      <rect x="25" y="215" rx="8" ry="8" width="181" height="50" /> 
      <rect x="25" y="275" rx="6" ry="6" width="73" height="29" /> 
      <rect x="121" y="274" rx="20" ry="20" width="84" height="39" />
      </ContentLoader>
    )
}

export default LoadingBlock;