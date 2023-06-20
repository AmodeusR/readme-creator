import React from "react";

const Tag = ({className = ""}) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M29.1 14.4L15.6 0.9C15 0.3 14.25 0 13.5 0H3C1.35 0 0 1.35 0 3V13.5C0 14.25 0.3 15 0.9 15.6L14.4 29.1C15 29.7 15.75 30 16.5 30C17.25 30 18 29.7 18.6 29.1L29.1 18.6C29.7 18 30 17.25 30 16.5C30 15.75 29.7 15 29.1 14.4ZM16.5 27L3 13.5V3H13.5L27 16.5M6.75 4.5C7.95 4.5 9 5.55 9 6.75C9 7.95 7.95 9 6.75 9C5.55 9 4.5 7.95 4.5 6.75C4.5 5.55 5.55 4.5 6.75 4.5ZM12.15 10.35L14.25 8.25L22.5 16.5L20.4 18.6L12.15 10.35ZM8.4 14.1L10.5 12L16.5 18L14.4 20.1L8.4 14.1Z"
        fill="#BDC9DB"
      />
    </svg>
  );
};

export default Tag;
