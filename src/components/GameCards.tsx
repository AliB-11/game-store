import { GameObject } from "../hooks/useGames";
import { Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import Rating from "./Rating";
import noImage from "../assets/noImage.png";
import getCroppedImage from "../services/image-url";

interface Props {
  game: GameObject;
}

const GameCards = ({ game }: Props) => {
  const getImage = (url: string) => {
    return url ? url : noImage;
  };

  return (
    <Card key={game.name}>
      <Image src={getImage(getCroppedImage(game.background_image))}></Image>
      <CardBody>
        <Heading fontSize={"xl"}>{game.name}</Heading>
        <HStack justifyContent={"space-between"}>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          ></PlatformIconList>
          <Rating metacritic={game.metacritic}></Rating>
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCards;
