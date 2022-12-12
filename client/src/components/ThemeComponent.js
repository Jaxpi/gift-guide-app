import React, { useReducer } from "react";
import { useState } from "react";
// import { useTheme } from "../utils/ThemeContext";
import WishListCard from "../components/WishListCard";

// Import our reducer
import { reducer } from "../utils/reducers";

// Import our action
// import { TOGGLE_THEME } from "../utils/actions";

export default function ThemeComponent() {
  // const initialState = useTheme();

  // Set up our useReducer hook. Accepts two arguments - the reducer and an initial state
  // const [state, dispatch] = useReducer(reducer, initialState);

  const [style, setStyle] = useState("cont");

  const changeStyle = () => {
    console.log("you just clicked");
    if (style === "cont1") {
      setStyle("cont2");
    } else if (style === "cont2") {
      setStyle("cont3");
    } else {
      setStyle("cont1");
    }
  };

  const cont1 = {
    backgroundImage: "-webkit-linear-gradient(bottom, blue, lightblue)",
    padding: "10px",
    margin: "10px",
    borderRadius: "10px",
  };

  const cont2 = {
    backgroundImage: "-webkit-linear-gradient(bottom, red, lightblue)",
    padding: "10px",
    margin: "10px",
    borderRadius: "10px",
  };

  const cont3 = {
    backgroundImage: "-webkit-linear-gradient(bottom, green, lightblue)",
    padding: "10px",
    margin: "10px",
    borderRadius: "10px",
  };

  // const textStyles = {
  //   background: "none",
  //   color: 'black',
  //   fontFamily: state.genTheme ? 'nav' : 'christmasTitle',
  //   fontWeight: state.genTheme ? 'bold' : 'normal',
  //   fontSize: state.genTheme ? 32 : 40,
  // };

  return (
    <>
      <div className="cardContainer" style={style}>
        <text>Username's Wish List</text>
        <WishListCard />
        {/* <button
          id="themeButton"
          // To change the theme we invoke dispatch and pass in an object containing action type and payload
          onClick={() =>
            dispatch({ type: TOGGLE_THEME, payload: state.genTheme })
          }
          className="btn"
          type="button"
        >
          Theme
        </button> */}
        <button
          id="themeButton"
          // To change the theme we invoke dispatch and pass in an object containing action type and payload
          onClick={changeStyle}
          className="btn"
          type="button"
        >
          Theme
        </button>
      </div>
    </>
  );
}
