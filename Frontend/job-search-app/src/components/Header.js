import React from "react";
function Header() {
  return (
    <div id="header">
      <div id="logo-container">
        <img
          src="https://img.freepik.com/premium-photo/letter-logo-flat-minimal-simple-white-background_959624-209.jpg"
          alt=""
        ></img>
        <h4>board</h4>
      </div>
      <ul id="nav-items">
        <li>Products</li>
        <li>Features</li>
        <li>App&Games</li>
        <li>Support</li>
      </ul>
      <div>Icon</div>
    </div>
  );
}
export default Header;
