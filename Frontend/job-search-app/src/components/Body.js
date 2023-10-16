import React from "react";
function Body() {
  return (
    <>
    <div id="main-content">
      <div className="left">
        <div className="big-text">
          <span>LET YOUR</span>
          <br />
          <span className="gradient-text">MIND EXPLORE</span>
          <br />
          <span>NEW WORLD</span>
          <br />
        </div>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry <br />
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry..
        </p>
        <div className="butons">
          <div className="btn btn1">BUY NOW</div>
          <div className="btn">EXPLORE</div>
        </div>
        <div className="overview">
          <div className="overview-items">
            <h4>500+</h4>
            <p> haahh hahhh</p>
          </div>
          <div className="overview-items">
            <h4>400+</h4>
            <p> haahh hahhh</p>
          </div>
          <div className="overview-items">
            <h4 className="gradient-text">200+</h4>
            <p> haahh hahhh</p>
          </div>
        </div>
      </div>
      <div className="right">
        <img
          src="https://img.etimg.com/thumb/width-640,height-480,imgsize-946742,resizemode-75,msid-99960905/industry/services/education/education-and-the-future-of-generative-ai.jpg"
          alt="imgage"
        />
      </div>
    </div>
    <div className="band">
        <div>
          <h3>Band1</h3>
        </div>
        <div>
          <h3>Band2</h3>
        </div>
        <div>
          <h3>Band3</h3>
        </div>
      </div>
    </>
  );
}
export default Body;
