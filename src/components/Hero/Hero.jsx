import { useNavigate } from "react-router";
import "./Hero.css";

function Hero() {
  const navigate = useNavigate();

  const handleStartConfig = () => {
    navigate("/config");
  };
  return (
    <div className="hero">
      <h1 className="heading--clipped">Poke Battle</h1>
      <p>Battle one on one!</p>
      <button type="button" onClick={handleStartConfig}>
        Battle
      </button>
    </div>
  );
}

export default Hero;
