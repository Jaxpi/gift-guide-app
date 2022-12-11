import React, { useReducer } from "react";
import { useTheme } from "../utils/ThemeContext";
import WishListCard from "../components/WishListCard";

// Import our reducer
import { reducer } from "../utils/reducers";

// Import our action
import { TOGGLE_THEME } from "../utils/actions";

export default function ThemeComponent() {
  const initialState = useTheme();

  // Set up our useReducer hook. Accepts two arguments - the reducer and an initial state
  const [state, dispatch] = useReducer(reducer, initialState);

  const themeStyles = {
    backgroundImage: state.genTheme
    ? '-webkit-linear-gradient(bottom, blue, white)'
    : '-webkit-linear-gradient(bottom, red, white)',
    padding: "10px",
    margin: "10px",
    borderRadius: "10px",
  };

  const textStyles = {
    background: "none",
    color: "black",
    fontFamily: state.genTheme ? 'genTitle' : 'christmasTitle',
    fontSize: state.genTheme ? 32 : 40,
  };

  return (
    <>
      <div className="cardContainer" style={themeStyles}>
        {/* <h1 id="myListTitle">Username's Wish List</h1> */}
        <text style={textStyles}>Username's Wish List</text>
        <WishListCard/>
        <button
        id="themeButton"
        // To change the theme we invoke dispatch and pass in an object containing action type and payload
        onClick={() =>
          dispatch({ type: TOGGLE_THEME, payload: state.genTheme })
        }
        className="btn"
        type="button"
      >
        Theme
      </button>
      </div>
    </>
  );
}
