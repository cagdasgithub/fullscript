//This function is created to test hooks, because custom hooks are
//not supported on testing libraries

import React from "react";

function HookWrapper(props) {
  const hook = props.hook ? props.hook() : undefined;
  return <div hook={hook} />;
}

export default HookWrapper;
