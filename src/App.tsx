import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GamesGrid from "./components/GamesGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";

function App() {
  const [newGenre, setNewGenre] = useState<Genre | null>(null);

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
        <GamesGrid genre={newGenre}></GamesGrid>
      </GridItem>
    </Grid>
  );
}

export default App;
