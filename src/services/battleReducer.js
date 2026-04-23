export const initialBattleState = {
  isPlaying: false,
  player: null,
  opponent: null,
  winner: "",
};

export function battleReducer(state, action) {
  switch (action.type) {
    case "setPlayer": {
      console.log(action.payload);
      return {
        ...state,
        player: action.payload,
      };
    }
    default:
      return state;
  }
}
