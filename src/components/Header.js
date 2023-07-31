import React from "react";

const Header = () => {
  return (
    // Top-level div with the "ui fixed menu" class for a fixed menu at the top
    <div className="ui fixed menu">
      {/* Container div with "ui container center" class to center content */}
      <div className="ui container center">
        <h1>Contace Manager</h1>
      </div>
    </div>
  );
};

export default Header;
