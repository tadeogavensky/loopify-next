"use client";

const error = ({ error, reset }) => {
  return (
    <div>
      error
      <button
        onClick={() => {
          reset;
        }}
      >
        Try again
      </button>
    </div>
  );
};

export default error;
