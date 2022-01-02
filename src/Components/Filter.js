import React from "react";

function Filter({ button, filter }) {
  return (
    <div className="buttons">
      {button.map((Subcat, i) => {
        return (
          <button type="button" onClick={() => filter(Subcat)} className="btn">
            {Subcat}
          </button>
        );
      })}
    </div>
  );
}

export default Filter;
