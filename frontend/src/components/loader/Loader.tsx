import React from 'react';

interface LoaderProps {
  color?: string;
}

const Loader: React.FunctionComponent<LoaderProps> = ({ color = 'primary' }) => {
  return (
    <div className="d-flex justify-content-center align-items-center">
      <div className={`spinner-border text-${color}`} role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default Loader;
