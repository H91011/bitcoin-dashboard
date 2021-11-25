const tenHour = 1000 * 60 * 60 * 10;

const timeUnits = {
  second: 1000,
  minute: 1000 * 60,
  hour: 1000 * 60 * 60,
};

function reducer(
  state = {
    time: tenHour,
    ...timeUnits,
    btcData: { USD: {}, GBP: {}, EUR: {} },
    setAnim: false,
  },
  action
) {
  let t;
  switch (action.type) {
    case "INCREMENT":
      t = state.time + timeUnits[action.unitType];
      t = t > tenHour ? tenHour : t;
      return {
        ...state,
        time: t,
      };
    case "DECREMENT":
      t = state.time - timeUnits[action.unitType];
      t = t < 0 ? tenHour : t;
      return {
        ...state,
        time: t,
        setAnim: false,
      };
    case "FETCH_DATA":
      return {
        ...state,
        btcData: action.data,
        setAnim: true,
      };
    default:
      return state;
  }
}

export default reducer;
