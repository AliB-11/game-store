import useData from "../hooks/useData"
import { Genre } from "./useGenres";


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

const useGames = (genre:Genre|null, platform: Platform | null) => useData<GameObject>("/games", {params: 
  { genres: genre?.id, 
    platforms: platform?.id}},
   [genre?.id,platform?.id])


export default useGames 