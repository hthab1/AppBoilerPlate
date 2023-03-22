import { useEffect } from "react";

import { useStateValue } from "../../StateProvider";
import { Cache, LoadCache } from "../cache/Cache";
import CachedValues from "../config/CachedValues";
import { DarkColors, LightColors } from "../config/Colors";
import DispatchTypeValues from "../config/DispatchTypeValues";

export const useThemeHook = () => {
  const { state, dispatch } = useStateValue();
  const themeMode = state.theme;

  useEffect(() => {
    const getTheme = async () => {
      const storedTheme = await LoadCache(CachedValues.theme);
      if (storedTheme) {
        dispatch({
          type: DispatchTypeValues.setTheme,
          theme: storedTheme,
        });
      } else {
        dispatch({
          type: DispatchTypeValues.setTheme,
          theme: state.theme,
        });
      }
    };
    getTheme();
  }, [state.theme]);

  const setAppTheme = async (newTheme) => {
    await Cache(CachedValues.theme, newTheme);
    dispatch({
      type: DispatchTypeValues.setTheme,
      theme: newTheme,
    });
  };
  let theme = themeMode === "light" ? LightColors : DarkColors;
  return { themeMode, setAppTheme, theme };
};
