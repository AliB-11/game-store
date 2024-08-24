import { Text, SimpleGrid, Skeleton } from "@chakra-ui/react";
import useGames, { Platform } from "../hooks/useGames";
import GameCards from "./GameCards";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { Genre } from "../hooks/useGenres";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

const GamesGrid = ({ gameQuery }: Props) => {
  const { data, error, isLoading } = useGames(gameQuery);

  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8]; //map 6 skeletons

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        spacing={10}
        columns={{ base: 1, md: 2, lg: 3, xl: 4 }}
        padding={"20px"}
      >
        {isLoading
          ? skeletons.map((skeleton) => (
              <GameCardContainer skeleton={skeleton} key={skeleton}>
                <GameCardSkeleton key={skeleton} />
              </GameCardContainer>
            ))
          : data.map((game) => (
              <GameCardContainer skeleton={game.id} key={game.id}>
                <GameCards key={game.name} game={game} />
              </GameCardContainer>
            ))}
      </SimpleGrid>
    </>
  );
};

export default GamesGrid;
