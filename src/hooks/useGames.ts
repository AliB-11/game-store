import { useState, useEffect } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface GameObject {
  id: number;
  name: string;
}

interface fetchGames {
  count: number;
  results: GameObject[];
}

const useGames = () => {

  const controller = new AbortController(); 

  const [games, setGames] = useState<GameObject[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get<fetchGames>("/games", { signal: controller.signal})
      .then((res) => setGames(res.data.results))
      .catch((err) => {
        if (err instanceof CanceledError) 
          return;
        setError(err.message)
      });
      return () => controller.abort();

}, []); 

  return {games, error}
}


export default useGames 