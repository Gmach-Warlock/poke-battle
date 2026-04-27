import { useOutletContext } from "react-router";
import "./Arena.css";

function Arena() {
  const { battleState } = useOutletContext();

  return (
    <div className="arena grid-12-flat">
      <h2 className="battle__title">Battle Time!</h2>
      <div className="battle__ui">
        <ul>
          <li>Attack</li>
          <li>Moves</li>
          <li>Ability</li>
          <li>Item</li>
        </ul>
      </div>
      <div
        className={`battle__opponent card--glass type-${battleState?.opponent?.types[0].type.name}`}
      >
        <h3>{battleState?.opponent?.name}</h3>
        <img
          src={battleState?.opponent?.sprites.front_default}
          alt={battleState?.opponent?.name}
        />
        <p>{`${battleState?.opponent?.hp} hp`}</p>
        <p>{`${battleState?.opponent?.mp} mp`}</p>
      </div>
      <div className="battle__player-stats">
        <h3>{battleState?.player?.name}</h3>
        <p>{battleState?.player?.hp}</p>
        <p>{battleState?.player?.mp}</p>
      </div>
    </div>
  );
}

export default Arena;
