import { Button, HStack, Image, List, ListItem } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import Genreskeleton from "./Genreskeleton";

interface Props {
  filterGenre: (genre: Genre) => void;
}

const GenreList = ({ filterGenre }: Props) => {
  const { data, isLoading, error } = useGenres();

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
              variant="link"
              fontSize={"lg"}
              onClick={() => {
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
