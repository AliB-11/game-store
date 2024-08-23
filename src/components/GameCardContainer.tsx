import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  skeleton: number;
}

const GameCardContainer = ({ children, skeleton }: Props) => {
  return (
    <Box borderRadius={"15px"} overflow={"hidden"} key={skeleton}>
      {children}
    </Box>
  );
};

export default GameCardContainer;
