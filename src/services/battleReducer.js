import { determineDamage } from "../utils/calculateStats";

export const initialBattleState = {
  isPlaying: false,
  isConfirming: false,
  isPlayersTurn: true,
  player: null,
  opponent: null,
  lastCombatMessage: "",
  winner: "",
};

export function battleReducer(state, action) {
  switch (action.type) {
    case "performAttack": {
      if (state.player.status === "paralyzed" && Math.random() < 0.25) {
        return {
          ...state,
          lastCombatMessage: `${state.player.name} is paralyzed! It can't move!`,
        };
      }

      const { attacker, target, moveIndex } = action.payload;

      const moveKeys = ["move1", "move2", "move3"];
      const damage = determineDamage(moveKeys[moveIndex]);

      const targetHPKey = `${target}HP`;

      return {
        ...state,
        [targetHPKey]: Math.max(0, state[targetHPKey] - damage),
        lastCombatMessage: `${attacker.toUpperCase()} dealt ${damage} damage to ${target.toUpperCase()}!`,
      };
    }
    case "setPlayer": {
      console.log(action.payload);
      const newPlayer = {
        abilities: action.payload.abilities,
        cries: action.payload.cries,
        height: action.payload.height,
        hp: 100,
        id: action.payload.id,
        items: [
          { name: "potion", id: crypto.randomUUID() },
          { name: "ether", id: crypto.randomUUID() },
          { name: "sleep potion", id: crypto.randomUUID() },
          { name: "poison bottle", id: crypto.randomUUID() },
        ],
        moves: action.payload.moves,
        mp: 50,
        name: action.payload.name,
        sprites: action.payload.sprites,
        status: "ok",
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
