export const initialBattleState = {
  isPlaying: false,
  isConfirming: false,
  isPlayersTurn: true,
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
    case "setOpponent": {
      console.log(action.payload);
      return {
        ...state,
        opponent: action.payload,
      };
    }
    default:
      return state;
  }
}
