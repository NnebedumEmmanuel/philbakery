import React from "react";

const PageTitle = (props) => {
  return (
    <div class="main_title">
      <h2>{props.title}</h2>
      <h5>
       {props.content}
      </h5>
    </div>
  );
};

export default PageTitle;
