import { Text, SimpleGrid } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCards from "./GameCards";

const GamesGrid = () => {
  const { games, error } = useGames();

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        spacing={10}
        columns={{ base: 1, md: 2, lg: 3, xl: 4 }}
        padding={"15px"}
      >
        {games.map((game) => (
          <GameCards key={game.name} game={game}></GameCards>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GamesGrid;
