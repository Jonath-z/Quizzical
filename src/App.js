import { useState } from "react";
import GameRoom from "./components/GameRoom";
import Starter from "./components/Starter";

function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);
  const onStartGame = () => {
    setIsGameStarted(true);
  };
  return (
    <div className="w-full h-screen bg-primary-100">
      <img
        className="w-64 h-64 absolute bottom-0"
        src="/blob 5.png"
        alt="blob1"
      />
      <img
        className="w-64 h-64 absolute top-0 right-0"
        src="/blobtop.png"
        alt="blob2"
      />
      <div className="flex justify-center items-center h-full w-full">
        {isGameStarted ? <GameRoom /> : <Starter onClick={onStartGame} />}
      </div>
    </div>
  );
}

export default App;
