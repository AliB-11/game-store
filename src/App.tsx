import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GamesGrid from "./components/GamesGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import Platforms from "./components/Platforms";
import { Platform } from "./hooks/useGames";

function App() {
  const [newGenre, setNewGenre] = useState<Genre | null>(null);

  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
    null
  );

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
        <NavBar></NavBar>
      </GridItem>

      <Show above="lg">
        <GridItem area="aside" paddingLeft={"20px"}>
          <GenreList
            filterGenre={(genre) => {
              setNewGenre(genre);
            }}
          ></GenreList>
        </GridItem>
      </Show>

      <GridItem area="main">
        <Platforms
          selectedPlatform={(platform) => {
            setSelectedPlatform(platform);
          }}
          newPlatform={selectedPlatform}
        ></Platforms>
        <GamesGrid genre={newGenre} platform={selectedPlatform}></GamesGrid>
      </GridItem>
    </Grid>
  );
}

export default App;
