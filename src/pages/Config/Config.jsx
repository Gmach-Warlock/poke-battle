import { useState } from "react";
import { fetchByName, fetchRandomPokemon } from "../../utils/fetches";
import "./Config.css";

function Config() {
  const [searchTerms, setSearchTerms] = useState("");
  const [preview, setPreview] = useState(null);
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

  return (
    <div className="config">
      <div className="prep"></div>

      <form action="" onSubmit={handleSearch}>
        <div className="prep">
          <h2>Prepare for battle!</h2>
          <div className="prep__options">
            <div className="search">
              <label htmlFor="search__input"></label>
              <input
                type="text"
                name="search__input"
                id="search_input"
                value={searchTerms}
                onChange={handleChange}
                placeholder="Search for a Pokemon"
              />
              <button type="submit">Search</button>
            </div>

            <div className="random">
              <span>Find a new Pokemon</span>
              <button type="button" onClick={handleFetchRandom}>
                New
              </button>
            </div>
          </div>
          <div className="prep__contestants">
            <div className="player">
              <h3></h3>
            </div>
            <div className="opponent"></div>
          </div>
        </div>

        <div className="preview">
          <h2>Preview</h2>
          {preview && (
            <div
              className={`card preview__card type-${preview?.types[0].type.name}`}
            >
              <h3>{preview?.name ?? "Undefined Name"}</h3>
              <img
                src={preview?.sprites.front_default ?? ""}
                alt={preview?.name ?? "Undefined Img"}
              />
              <p>Moves</p>
              <ul>
                <li>{preview?.moves[0].move.name}</li>
                <li>{preview?.moves[1].move.name}</li>
                <li>{preview?.moves[2].move.name}</li>
                <li>{preview?.moves[3].move.name}</li>
              </ul>
              <div className="preview__buttons">
                <button type="button">set as Player</button>
                <button type="button">set as Opponent</button>
              </div>
            </div>
          )}
        </div>
      </form>
    </div>
  );
}

export default Config;
