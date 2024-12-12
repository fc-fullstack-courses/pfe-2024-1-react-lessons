import CONSTANTS from "./configs";

/*
    редюсер приймає поточне значення стану та action який йому надіслав dispatch
    та має на їх основі повернути нове значення стану. Запускається реактом коли хтось запускає
    dispatch
 */
export const initialState = {
  email: '',
  comment: '',
  user: {
    id: 0,
    firstName: 'Petro',
    lastName: 'Userenko',
    isMale: true,
    email: 'testuser@gmail.com',
    age: 12,
  },
  theme: CONSTANTS.THEMES.LIGHT_THEME,
  isTrackerShown: false,
};

export function reducer(state, action) {
  console.log(state);
  console.log(action);

  switch (action.type) {
    case 'changeEmail': {
      const newState = {
        ...state,
        email: action.email,
      };

      return newState;
    }
    case 'changeComment': {
      const newState = {
        ...state,
        comment: action.comment,
      };

      return newState;
    }
    case 'changeTheme': {
      const newState = {
        ...state,
        theme: action.theme,
      };

      return newState;
    }
    case 'loginUser': {
      const newState = {
        ...state,
        user: action.user,
      };

      return newState;
    }
    case 'logoutUser': {
      const newState = {
        ...state,
        user: null,
      };

      return newState;
    }
    case 'toggleTracker': {
      return {
        ...state,
        isTrackerShown: !state.isTrackerShown,
      };
    }
  }

  return state;
}
