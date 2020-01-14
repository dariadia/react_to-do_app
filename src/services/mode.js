import { KEY_SLASH, KEY_N, KEY_ESCAPE } from "keycode-js";

export const MODE_NONE = "никакие";
export const MODE_SEARCH = "поиск";
export const MODE_CREATE = "создать";

export function getNextModeByKey(current, keyPressed) {
  switch (current) {
    case MODE_NONE:
      if (keyPressed === KEY_SLASH) return MODE_SEARCH;
      if (keyPressed === KEY_N) return MODE_CREATE;
      break;
    default:
      if (keyPressed === KEY_ESCAPE) return MODE_NONE;
  }

  return current;
}
