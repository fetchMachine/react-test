import React from 'react';

const WithCtx = (Wrapped, Ctx) => {
  return (props) => (
    <Ctx>
      {(data) => <Wrapped data={data} {...props} /> }
    </Ctx>
  );
}

export default WithCtx;
