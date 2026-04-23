import { useReducer } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";

function matchReducer(state, action) {
  switch (action.type) {
    case "startPlaying": {
      return {
        ...state,
        isPlaying: !state.isPlaying,
      };
    }
  }
  throw Error("Unknown action: " + action.type);
}

function App() {
  const [match, dispatch] = useReducer(matchReducer, {
    isPlaying: false,
    player: null,
    opponent: null,
    winner: "",
    playersTurn: true,
  });

  return (
    <>
      <Header />
      <Hero match={match} dispatch={dispatch} />
    </>
  );
}

export default App;
