import { useOutletContext, useNavigate } from "react-router";
import "./Confirm.scss";

function Confirm() {
  const { battleState } = useOutletContext();
  const navigate = useNavigate();

  const handleConfirmStart = () => {
    navigate("/arena");
  };

  const handleCancelStart = () => {
    navigate("/config");
  };

  return (
    <div className={`confirm overlay column--centered gap-3`}>
      <h3 className="heading--blocked">Are you sure this ok?</h3>

      <div className="confirm__actions action">
        <button
          type="button"
          className="btn btn--confirm"
          onClick={handleConfirmStart}
        >
          Ok
        </button>
        <button
          type="button"
          className="btn btn--cancel"
          onClick={handleCancelStart}
        >
          Cancel
        </button>
      </div>
      <div className="container row--centered">
        <div
          className={`card--glass preview__card type-${battleState?.player?.types[0].type.name}`}
        >
          <h3>{battleState?.player?.name ?? "Undefined Name"}</h3>
          <p>{`Type: ${battleState?.player?.types[0].type.name}`}</p>
          <p>{`Height: ${(battleState?.player?.height * 0.328084).toFixed(0)} feet`}</p>
          <p>{`Weight: ${(battleState?.player?.weight * 0.220462).toFixed(0)} lbs`}</p>
          <img
            src={battleState?.player?.sprites.front_default ?? ""}
            alt={battleState?.player?.name ?? "Undefined Img"}
          />
          <p>Moves:</p>
          <ul>
            <li>{battleState?.player?.moves[0]?.move.name}</li>
            <li>{battleState?.player?.moves[1]?.move.name}</li>
            <li>{battleState?.player?.moves[2]?.move.name}</li>
          </ul>
          <p>Ability:</p>
          <p>{battleState?.player?.abilities[0].ability.name}</p>
        </div>
        <span className="mx-3">vs</span>

        <div
          className={`card--glass preview__card type-${battleState?.opponent?.types[0].type.name}`}
        >
          <h3>{battleState?.opponent?.name ?? "Undefined Name"}</h3>
          <p>{`Type: ${battleState?.opponent?.types[0].type.name}`}</p>
          <p>{`Height: ${(battleState?.opponent?.height * 0.328084).toFixed(0)} feet`}</p>
          <p>{`Weight: ${(battleState?.opponent?.weight * 0.220462).toFixed(0)} lbs`}</p>
          <img
            src={battleState?.opponent?.sprites.front_default ?? ""}
            alt={battleState?.opponent?.name ?? "Undefined Img"}
          />
          <p>Moves:</p>
          <ul>
            <li>{battleState?.opponent?.moves[0]?.move.name}</li>
            <li>{battleState?.opponent?.moves[1]?.move.name}</li>
            <li>{battleState?.opponent?.moves[2]?.move.name}</li>
          </ul>
          <p>Ability:</p>
          <p>{battleState?.opponent?.abilities[0].ability.name}</p>
        </div>
      </div>
    </div>
  );
}

export default Confirm;
