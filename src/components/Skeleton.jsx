import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = (props) => (
  <ContentLoader
    speed={2}
    width={260}
    height={300}
    viewBox="0 0 260 300"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="20" y="20" rx="20" ry="20" width="240" height="170" />
    <rect x="20" y="197" rx="10" ry="10" width="240" height="40" />
    <rect x="20" y="251" rx="12" ry="12" width="80" height="40" />
    <rect x="110" y="251" rx="12" ry="12" width="150" height="40" />
  </ContentLoader>
);

export default Skeleton;
