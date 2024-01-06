import * as React from "react";

const Search = ({ size = 14, color = "currentColor", ...props }) => (
 <svg
  width={size}
  height={size}
  fill={color}
  viewBox="0 0 24 24"
  xmlns="http://www.w3.org/2000/svg"
  {...props}
 >
  <path
   fillRule="evenodd"
   d="M9.6 4.8a4.8 4.8 0 1 0 0 9.6 4.8 4.8 0 0 0 0-9.6ZM2.4 9.6a7.2 7.2 0 1 1 13.068 4.171l5.78 5.78a1.2 1.2 0 0 1-1.696 1.697l-5.78-5.779A7.2 7.2 0 0 1 2.4 9.6Z"
   clipRule="evenodd"
  />
 </svg>
);

export default Search;


