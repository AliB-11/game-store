import { Text } from "@chakra-ui/react";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

const Heading = ({ gameQuery }: Props) => {
  return (
    <Text fontSize={"50"} fontWeight={"700"}>
      {gameQuery.platform?.name} {gameQuery.genre?.name} Games
    </Text>
  );
};

export default Heading;
