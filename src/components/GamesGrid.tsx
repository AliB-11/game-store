import { Text, SimpleGrid } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCards from "./GameCards";
import GameCardSkeleton from "./GameCardSkeleton";

const GamesGrid = () => {
  const { games, error, isLoading } = useGames();

  const skeletons = [1, 2, 3, 4, 5, 6]; //map 6 skeletons

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        spacing={10}
        columns={{ base: 1, md: 2, lg: 3, xl: 4 }}
        padding={"15px"}
      >
        {isLoading
          ? skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)
          : games.map((game) => <GameCards key={game.name} game={game} />)}
      </SimpleGrid>
    </>
  );
};

export default GamesGrid;
