import { HStack, Image } from "@chakra-ui/react";
import EpicGames from "../assets/EpicGames.png";
import Store from "../assets/Store.svg";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack
      justifyContent={"space-between"}
      padding={"15px"}
      paddingRight={"30px"}
    >
      <HStack>
        <Image src={EpicGames} boxSize="30px"></Image>
        <Image src={Store} boxSize="50px" marginLeft={"10px"}></Image>
      </HStack>
      <ColorModeSwitch></ColorModeSwitch>
    </HStack>
  );
};

export default NavBar;
