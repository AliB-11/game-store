import { Text, SimpleGrid } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCards from "./GameCards";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";

const GamesGrid = () => {
  const { games, error, isLoading } = useGames();

  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8]; //map 6 skeletons

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        spacing={20}
        columns={{ base: 1, md: 2, lg: 3, xl: 4 }}
        padding={"20px"}
      >
        {isLoading
          ? skeletons.map((skeleton) => (
              <GameCardContainer>
                <GameCardSkeleton key={skeleton} />
              </GameCardContainer>
            ))
          : games.map((game) => (
              <GameCardContainer>
                <GameCards key={game.name} game={game} />
              </GameCardContainer>
            ))}
      </SimpleGrid>
    </>
  );
};

export default GamesGrid;
