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
      const newPlayer = {
        abilities: action.payload.abilities,
        cries: action.payload.cries,
        height: action.payload.height,
        hp: 100,
        id: action.payload.id,
        moves: action.payload.moves,
        mp: 50,
        name: action.payload.name,
        sprites: action.payload.sprites,
        status: "normal",
        types: action.payload.types,
        weight: action.payload.weight,
      };
      console.log("new player ", newPlayer);
      return {
        ...state,
        player: newPlayer,
      };
    }
    case "setOpponent": {
      console.log(action.payload);
      const newOpponent = {
        abilities: action.payload.abilities,
        cries: action.payload.cries,
        height: action.payload.height,
        hp: 100,
        id: action.payload.id,
        moves: action.payload.moves,
        mp: 50,
        name: action.payload.name,
        sprites: action.payload.sprites,
        status: "normal",
        types: action.payload.types,
        weight: action.payload.weight,
      };
      console.log("new opponent", newOpponent);
      return {
        ...state,
        opponent: newOpponent,
      };
    }
    default:
      return state;
  }
}
