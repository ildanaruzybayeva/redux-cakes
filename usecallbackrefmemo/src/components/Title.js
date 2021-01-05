import React from "react";

function Title() {
  console.log("Rendering title");
  return <div>This is the title with no props</div>;
}

export default React.memo(Title);
