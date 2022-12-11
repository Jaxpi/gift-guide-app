import { TOGGLE_THEME } from './actions';

export const reducer = (state, { type }) => {
  const newGenTheme = !state.genTheme;
  switch (type) {
    case TOGGLE_THEME: {
      return {
        ...state,
        genTheme: newGenTheme,
      };
    }
    default:
      return state;
  }
};