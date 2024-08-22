import { useState, useEffect } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";


export interface Platform{
  id: number, 
  name: string, 
  slug: string
}


export interface GameObject {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: {platform : Platform}[]; //parent_platforms is an array of objects where each object has a property called platform which points to a Platform object
  metacritic: number;
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