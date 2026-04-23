import { useReducer } from "react";
import { Outlet } from "react-router";
import { initialBattleState, battleReducer } from "./services/battleReducer";

function Root() {
  const [battleState, dispatch] = useReducer(battleReducer, initialBattleState);

  return <Outlet context={{ battleState, dispatch }} />;
}

export default Root;
