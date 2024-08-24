import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GamesGrid from "./components/GamesGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import Platforms from "./components/Platforms";
import { Platform } from "./hooks/useGames";
import OrderList, { Order } from "./components/OrderList";
import { HttpStatusCode } from "axios";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  orderType: Order | null;
  search: string | null;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar
          onSearch={(search) => {
            setGameQuery({ ...gameQuery, search });
          }}
        ></NavBar>
      </GridItem>

      <Show above="lg">
        <GridItem area="aside" paddingLeft={"20px"}>
          <GenreList
            filterGenre={(genre) => {
              setGameQuery({ ...gameQuery, genre });
            }}
          ></GenreList>
        </GridItem>
      </Show>

      <GridItem area="main">
        <HStack marginX={5} marginBottom={5}>
          <Platforms
            selectedPlatform={(platform) => {
              setGameQuery({ ...gameQuery, platform });
            }}
            newPlatform={gameQuery.platform}
          ></Platforms>
          <OrderList
            setOrder={(orderType) => {
              setGameQuery({ ...gameQuery, orderType });
            }}
            newOrder={gameQuery.orderType}
          ></OrderList>
        </HStack>
        <GamesGrid gameQuery={gameQuery}></GamesGrid>
      </GridItem>
    </Grid>
  );
}

export default App;
