import { Button, HStack, Image, List, ListItem } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import Genreskeleton from "./Genreskeleton";
import { useState } from "react";

interface Props {
  filterGenre: (genre: Genre) => void;
}

const GenreList = ({ filterGenre }: Props) => {
  const { data, isLoading, error } = useGenres();

  const [highlight, sethighlight] = useState(0);

  const setFontWeight = (id: number) => {
    const font = highlight === id ? "bold" : "300";
    return font;
  };

  if (error) return null;

  if (isLoading) {
    return <Genreskeleton></Genreskeleton>;
  }

  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} marginY={5}>
          <HStack>
            <Image
              boxSize={"36px"}
              borderRadius={8}
              src={genre.image_background}
            ></Image>
            <Button
              key={genre.id}
              variant="link"
              fontWeight={setFontWeight(genre.id)}
              fontSize={"md"}
              onClick={() => {
                sethighlight(genre.id);
                filterGenre(genre);
              }}
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
