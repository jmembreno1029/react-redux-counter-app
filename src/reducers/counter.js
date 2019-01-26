const initialState = {
  count: 0,
  timesClicked: 0,
  numberInputted: 0
};

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + 1,
        timesClicked: state.timesClicked + 1
      };
    case 'DECREMENT':
      return {
        count: state.count - 1,
        timesClicked: state.timesClicked + 1
      };
    case 'INPUT_NUMBER_CHANGE':
      return {
        ...state,
        numberInputted: action.number
      }
    case 'INPUT_NUMBER':
      return {
        ...state,
        count: parseInt(state.numberInputted),
        timesClicked: 0,
        numberInputted: null
      }
    default:
      return state;
  }
}

export default counterReducer;