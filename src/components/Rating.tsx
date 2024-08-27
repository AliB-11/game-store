import { Badge, Box } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";

interface Props {
  metacritic: number;
}

const Rating = ({ metacritic }: Props) => {
  const color =
    metacritic > 80 ? "#6dc849" : metacritic > 60 ? "#fdca52" : "#fc4b37";

  const scheme = metacritic > 80 ? "green" : metacritic > 60 ? "yellow" : "red";

  return (
    <Badge
      variant={"outline"}
      borderRadius={"md"}
      colorScheme={scheme}
      color={color}
      paddingX={"8px"}
      marginTop={"13px"}
      fontSize="14px"
    >
      {metacritic}
    </Badge>
  );
};

export default Rating;
