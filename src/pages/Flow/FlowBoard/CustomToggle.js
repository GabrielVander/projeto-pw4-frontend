import React from 'react';


const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <button
      class="btn btn-link"
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    >
      {children}
    </button>
  ));

export default CustomToggle;