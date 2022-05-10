import React from "react";

export default function Recipe({ name, cookTime, servings, instructions }) {
  return (
    <div>
      {/* recipe */}
      <div>
        <h3>{name}</h3>
        <div>
          <button>Edit</button>
          <button>Delete</button>
        </div>
      </div>
      {/* cook time */}
      <div>
        <span>Cook Time:</span>
        <span>{cookTime}</span>
      </div>
      {/* serving information */}
      <div>
        <span>Servings:</span>
        <span>{servings}</span>
      </div>
      <div>
        <div>{instructions}</div>
      </div>
    </div>
  );
}
