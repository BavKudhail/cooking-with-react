import React from "react";

export default function Recipe() {
  return (
    <div>
    {/* recipe */}
      <div>
        <h3>Plain Chicken</h3>
        <div>
          <button>Edit</button>
          <button>Delete</button>
        </div>
      </div>
      {/* cook time */}
      <div>
        <span>Cook Time:</span>
        <span>1:45</span>
      </div>
      {/* serving information */}
      <div>
        <span>Servings:</span>
        <span>3</span>
      </div>
      <div>
        <div>1. Put salt on Chicken 2. Put chicken in over 3. Eat chicken</div>
      </div>
    </div>
  );
}
