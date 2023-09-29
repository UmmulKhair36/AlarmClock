const INITIAL_STATES = {
  tc: false,
  pp: false,
};

export default function (state = INITIAL_STATES, action) {
  switch (action.type) {
    case 'ACCEPT_TC':
      return {
        ...state,
        tc: true,
      };
    case 'ACCEPT_PP':
      return {
        ...state,
        pp: true,
      };
    case 'LOGOUT':
      return INITIAL_STATES;
    default:
      return state;
  }
}
