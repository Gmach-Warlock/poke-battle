import { useState } from "react";
import { fetchByName, fetchRandomPokemon } from "../../utils/fetches";
import "./Config.scss";
import { useNavigate, useOutletContext } from "react-router";

function Config() {
  const { battleState, dispatch } = useOutletContext();
  const [searchTerms, setSearchTerms] = useState("");
  const [preview, setPreview] = useState(null);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setSearchTerms(e.target.value);
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    const pokemon = await fetchByName(searchTerms);
    setPreview(pokemon);
    setSearchTerms("");
  };

  const handleFetchRandom = async () => {
    const pokemon = await fetchRandomPokemon();
    setPreview(pokemon);
  };

  const handleSetPlayer = () => {
    console.log(battleState);
    dispatch({ type: "setPlayer", payload: preview });
  };

  const handleSetOpponent = () => {
    console.log(battleState);
    dispatch({ type: "setOpponent", payload: preview });
  };

  const handleStartBattle = () => {
    if (battleState.player === null || battleState.opponent === null) {
      alert("Please Make sure you have a player and opponent selected!");
      return;
    }

    navigate("/confirm");
  };

  return (
    <div className="config">
      <div className="prep">
        <h2 className="heading--blocked">Prepare for battle!</h2>
        <div className="prep__options">
          <form className="search" onSubmit={handleSearch}>
            <input
              type="text"
              name="search__input"
              id="search_input"
              value={searchTerms}
              onChange={handleChange}
              placeholder="Search for a Pokemon"
            />
            <button type="submit">Search</button>
          </form>

          <div className="random">
            <span>
              Find a new Pokemon{" "}
              <button type="button" onClick={handleFetchRandom}>
                New
              </button>
            </span>
          </div>
        </div>
      </div>

      <div className="preview">
        <h2 className="preview__title heading--blocked">Preview</h2>
        {preview && (
          <div
            className={`card--glass preview__card type-${preview?.types[0].type.name}`}
          >
            <h3>{preview?.name ?? "Undefined Name"}</h3>
            <p>{`Type: ${preview?.types[0].type.name}`}</p>
            <p>{`Height: ${(preview?.height * 0.328084).toFixed(0)} feet`}</p>
            <p>{`Weight: ${(preview?.weight * 0.220462).toFixed(0)} lbs`}</p>
            <img
              src={preview?.sprites.front_default ?? ""}
              alt={preview?.name ?? "Undefined Img"}
            />
            <p>Moves:</p>
            <ul>
              <li>{preview?.moves[0]?.move.name}</li>
              <li>{preview?.moves[1]?.move.name}</li>
              <li>{preview?.moves[2]?.move.name}</li>
            </ul>
            <p>Ability:</p>
            <p>{preview?.abilities[0].ability.name}</p>
            <div className="preview__buttons">
              <button type="button" onClick={handleSetPlayer}>
                set as Player
              </button>
              <button type="button" onClick={handleSetOpponent}>
                set as Opponent
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="prep__contestants">
        <h3 className="h">Match</h3>
        <span>{battleState.player?.name ?? ""}</span>
        <span> vs </span>
        <span>{battleState.opponent?.name ?? ""}</span>
        <button
          type="submit"
          className="btn btn--begin"
          onClick={handleStartBattle}
        >
          Fight
        </button>
      </div>
    </div>
  );
}

export default Config;
