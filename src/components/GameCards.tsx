import React from "react";
import { GameObject, Platform } from "../hooks/useGames";
import {
  Box,
  Card,
  CardBody,
  Center,
  Heading,
  HStack,
  Image,
  Text,
} from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import Rating from "./Rating";
import getCroppedImage from "../services/image-url";

interface Props {
  game: GameObject;
}

const GameCards = ({ game }: Props) => {
  return (
    <Card borderRadius={"15px"} overflow={"hidden"} key={game.name}>
      <Image src={getCroppedImage(game.background_image)}></Image>
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
