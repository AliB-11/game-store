import meh from "../assets/meh.webp";
import thumbsUp from "../assets/thumbsUp.png";
import target from "../assets/target.png";
import skip from "../assets/skip.png";
import { GameObject } from "../hooks/useGames";
import { Box, HStack, Image } from "@chakra-ui/react";

interface Props {
  game: GameObject;
}

const RatingEmoji = ({ game }: Props) => {
  if (game.rating_top === 0) return "";

  const ratings: { [key: number]: string } = {
    1: skip,
    2: meh,
    3: thumbsUp,
    4: thumbsUp,
    5: target,
  };

  const emoji = ratings[game.rating_top];

  return (
    <HStack>
      <Box boxSize={6} marginY={3}>
        <Image src={emoji} objectFit={"cover"}></Image>
      </Box>
    </HStack>
  );
};

export default RatingEmoji;
