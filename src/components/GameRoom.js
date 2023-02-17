import { useState, useEffect, useCallback } from "react";
import { API_URL } from "./helpers/constants";
import QuestionCard from "./QuestionCard";
import Spinner from "./Spinner";

function GameRoom() {
  const [games, setGames] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [fetchGameFailed, setFetchGameFailed] = useState(false);

  const fetchData = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await fetch(API_URL);
      const data = await response.json();
      console.log({ data });
      setGames(data.results);
      setIsLoading(false);
    } catch (err) {
      setFetchGameFailed(true);
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  if (fetchGameFailed && !isLoading) {
    return (
      <div className="fixed inset-0 bg-primary-300">
        <div className="w-fit px-32 py-32 bg-white text-2xl text-primary-500 font-karla rounded-2xl">
          Failed to fetch questions
        </div>
      </div>
    );
  } else
    return (
      <div>
        {isLoading ? (
          <Spinner />
        ) : (
          <div>
            {games.map((question, index) => {
              return (
                <div key={index} className="mb-5">
                  <div className="fixed top-0"></div>
                  <QuestionCard question={question} />
                </div>
              );
            })}
            <button
              onClick={() => fetchData()}
              className="bg-primary-500 text-white text-xl px-5 py-2 rounded-lg font-karla"
            >
              Load new questions
            </button>
          </div>
        )}
      </div>
    );
}

export default GameRoom;
