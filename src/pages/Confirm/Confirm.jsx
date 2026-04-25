import { useOutletContext, useNavigate } from "react-router";
import "./Confirm.css";

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
    <div className={`confirmation__${status} overlay`}>
      <h3>Are you sure this ok?</h3>
      <span>{battleState.player?.name ?? ""}</span>
      <span> vs </span>
      <span>{battleState.opponent?.name ?? ""}</span>
      <br />
      <div className="confirmation__sprites">
        <img
          src={battleState.player?.sprites.front_default}
          alt={battleState.player?.name}
        />
        <img
          src={battleState.opponent?.sprites.front_default}
          alt={battleState.opponent?.name}
        />
      </div>
      <div className="confirmation__actions action">
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
    </div>
  );
}

export default Confirm;
