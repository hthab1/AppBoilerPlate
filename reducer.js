import { ThemeMode } from "./src/config/consts";
import DispatchTypeValues from "./src/config/DispatchTypeValues";

export const initialState = {
  theme: ThemeMode.light,
  appStarted: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case DispatchTypeValues.setTheme:
      return {
        ...state,
        theme: action.theme,
      };

    case DispatchTypeValues.setAppStarted:
      return {
        ...state,
        appStarted: action.appStarted,
      };

    default:
      return state;
  }
};

export default reducer;
