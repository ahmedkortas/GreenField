import React from "react";
import "./style/Component/Home.css";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      i: 0,
    };
    this.slide = this.slide.bind(this);
  }

  slide() {
    setTimeout(() => {
      if (this.state.i < this.props.items.length - 1) {
        this.setState({ i: this.state.i + 1 });
      } else {
        this.setState({ i: 0 });
      }
    }, 3500);
  }

  render() {
    this.slide();
    let item = this.props.items;
    return (
      <div>
        <div>
          <div>
            <img
              src={item[this.state.i]}
              style={{
                width: "60%",
                height: "90%",
                position: "absolute",
                padding: "25px",
                borderRadius: "8px",
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
                float: "left",
              }}
            />
          </div>
        </div>

        <div
          style={{
            color: "black",
            left: "50%",
            top: "50%",
            transform: "translateX(-50%) translateY(-50%)",
            textAlign: "center",
            fontfamily: "Arial",
            fontSize: "3em",
            marginLeft: "1850px",
            marginTop: "390px",
            float: "right",
          }}
        >
          {/* <h2 className="title" >KORFI</h2> */}
          {/* <br></br>
     <br></br>
     <br></br> */}
          <p className="subheading">
            <strong>KORFI : </strong> we all suffer from it, every and each one
            of us has to do some daily boring routine that we hate, gardening,
            dog walking, fixing the doors and many many more other tasks. Not
            any more, we present to you our solution for your problems, we
            provide a platform that you can use to delegate the small daily
            tasks that we call Korfi. no more cleaning the garage or painting
            the house, a simple click and you're done. and for those who just
            are looking for some opportunities, go hunt on our Ads page and let
            the MONEY flow. We provide to you the work, do not hesitate our
            solution for a better and stressless life
          </p>
        </div>

        <div style={{ float: "left" }}>
          <ul className="social-icons">
            <li>
              <a
                href="https://www.facebook.com/Korfi-109834854250334"
                className="social-icon"
                target="_blank"
              >
                {" "}
                <i className="fa fa-facebook"></i>
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/KorfiTunisia"
                className="social-icon"
              >
                {" "}
                <i className="fa fa-twitter" target="_blank"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/korfi.tunisia/"
                className="social-icon"
                target="_blank"
              >
                {" "}
                <i className="fa fa-instagram"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.google.com/"
                className="social-icon"
                target="_blank"
              >
                {" "}
                <i className="fa fa-google"></i>
              </a>
            </li>
            <li>
              <a className="social-icon">
                {" "}
                <i className="fa fa-envelope"></i>
              </a>
            </li>
            <span style={{ color: "black", fontSize: "25px" }}>
              {" "}
              :<strong> Korfi.Tunisia@gmail.com</strong>
            </span>
          </ul>
        </div>
      </div>
    );
  }
}

export default Home;
