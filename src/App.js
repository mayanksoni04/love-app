// import useSound from "use-sound";
import "./App.css";
import { useState } from "react";
import gif1 from "./gif1.gif";
import gif2 from "./gif2.gif";
import saudebazzi from "./saudebazzi.mp3";
function App() {
  const audio = new Audio(saudebazzi);
  audio.loop = true;
  const [no, setno] = useState(55);
  const [first, setfirst] = useState(66);
  const [yes, setyes] = useState(true);
  const handleno = (e) => {
    console.log(window.innerHeight);
    setno(Math.floor(Math.random() * 200));
    setfirst(Math.floor(Math.random() * 200));

    console.log(no);
    e.target.style.top = no + "px";
    e.target.style.left = first + "px";
  };
  const handleyes = () => {
    setyes(false);
    audio.loop = true;
    audio.play();
  };
  return (
    <>
      <div>
        {yes ? (
          <div className="parent">
            <div className="child">
              <h1>Do U Love ME ; )</h1>
              <div className="child1">
                <img src={gif1} alt="" />
              </div>
              <div className="buttonp">
                <button onClick={handleyes} className="btn1">
                  Yes
                </button>
                <button
                  onClick={handleno}
                  onMouseOver={handleno}
                  className="btn2"
                >
                  No
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="parent">
            <div className="child">
              <h1>I Love U 2</h1>
              <div className="child1">
                <img src={gif2} alt="" />
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
