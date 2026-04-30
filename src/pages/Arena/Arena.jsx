import { useOutletContext } from "react-router";
import "./Arena.scss";

/* const menus = {
  main: ['attack', 'moves', 'ability', 'item'],
  items: ['potion', 'ether', 'back']
}; */

function Arena() {
  const { battleState } = useOutletContext();

  return (
    <div className="arena grid-12-flat">
      <h2 className="battle__title heading--blocked">Battle Time!</h2>
      <div className="battle__ui">
        <ul className="card--light">
          <li>Attack</li>
          <li>Moves</li>
          <li>Ability</li>
          <li>Item</li>
        </ul>
      </div>
      <div
        className={`battle__opponent type-${battleState?.opponent?.types[0].type.name}`}
      >
        <h3>{battleState?.opponent?.name}</h3>
        <img
          src={battleState?.opponent?.sprites.front_default}
          alt={battleState?.opponent?.name}
          className="img img--battle"
        />
      </div>
      <div
        className={`battle__player-stats card--glass type-${battleState?.player?.types[0].type.name}`}
      >
        <h3>{battleState?.player?.name}</h3>
        <div className="row--between">
          <p>Type: </p>
          <p>{battleState?.player?.types[0].type.name}</p>
        </div>
        <div className="row--between">
          <p>HP: </p>
          <p>{battleState?.player?.hp}</p>
        </div>
        <div className="row--between">
          <p>MP: </p>
          <p>{battleState?.player?.mp}</p>
        </div>
        <div className="row--between">
          <p>Status: </p>
          <p>{battleState?.player?.status}</p>
        </div>
      </div>
      <div className="battle__message container column--centered card--light">
        <p>What would like to do?</p>
      </div>
    </div>
  );
}

export default Arena;
