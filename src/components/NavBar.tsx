import { HStack, Icon, Image, useColorMode } from "@chakra-ui/react";
import EpicGames from "../assets/EpicGames.png";
import Store from "../assets/Store.svg";
import ColorModeSwitch from "./ColorModeSwitch";
import { IoGameControllerOutline } from "react-icons/io5";

const NavBar = () => {
  return (
    <HStack
      justifyContent={"space-between"}
      padding={"15px"}
      paddingRight={"30px"}
    >
      <HStack>
        <Icon as={IoGameControllerOutline} boxSize={10} />
        <Image src={Store} boxSize="50px" marginLeft={"10px"}></Image>
      </HStack>
      <ColorModeSwitch></ColorModeSwitch>
    </HStack>
  );
};

export default NavBar;
