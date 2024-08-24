import { Box, Flex, HStack, Icon, Image } from "@chakra-ui/react";
import { IoGameControllerOutline } from "react-icons/io5";
import Store from "../assets/Store.svg";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (search: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  return (
    <Flex
      padding={"15px"}
      paddingRight={"30px"}
      justifyContent={"space-between"}
      flexDirection={"row"}
    >
      <HStack marginRight={4} width={110}>
        <Icon as={IoGameControllerOutline} boxSize={10} />
        <Image src={Store} boxSize="50px" marginLeft={"5px"}></Image>
      </HStack>
      <Box marginTop={2} flex={"1"}>
        <SearchInput
          onSearch={(search) => {
            onSearch(search);
          }}
        ></SearchInput>
      </Box>
      <HStack marginLeft={4} marginTop={1}>
        <ColorModeSwitch></ColorModeSwitch>
      </HStack>
    </Flex>
  );
};

export default NavBar;
