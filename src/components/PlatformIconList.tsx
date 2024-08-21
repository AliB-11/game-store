import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
} from "react-icons/fa";
import { IoLogoAndroid } from "react-icons/io";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { Platform } from "../hooks/useGames";
import { HStack, Icon, Text } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    ios: MdPhoneIphone,
    mac: FaApple,
    linux: FaLinux,
    web: BsGlobe,
    android: IoLogoAndroid,
  };

  return (
    <HStack marginTop={"10px"}>
      {platforms.map((platform) => (
        <Icon as={iconMap[platform.slug]} color={"blue.100"}></Icon>
      ))}
    </HStack>
  );
};

export default PlatformIconList;
