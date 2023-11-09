import { createStore } from "redux";

const darkTheme = (state = 'dark', action) => {
  switch (action.type) {
    case 'light':
      return 'light';
    default:
      return 'dark';
  }
};

const store = createStore(darkTheme);

export default store;
