import React from 'react';

// TODO: style this to make look like an error
const Error = ({ message }) => (
  <pre>
    <code>
      Error: { message }
    </code>
  </pre>
);

export default Error;
