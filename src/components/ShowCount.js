import React from "react";

function ShowCount({ count, title }) {
  console.log(`rendaring ${title}....`);

  return (
    <p>
      {title} is {count}
    </p>
  );
}

export default React.memo(ShowCount);
