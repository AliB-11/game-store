import useData from "./useData";
import { GameObject } from "./useGames";

export interface Games {
  id: number, 
  slug: string
}


export interface Genre{ 
  id: number, 
  name:string,
  image_background: string
  games: Games
}

const useGenres = () =>  useData<Genre>('/genres');

export default useGenres 