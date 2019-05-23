import React from "react";
const Debug = props => {
  return <pre>{JSON.stringify(props.value, null, 2)}</pre>;
};

export default Debug;
