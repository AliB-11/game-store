import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";
import { Platform } from "../hooks/useGames";

interface Props {
  selectedPlatform: (platform: Platform) => void;
  newPlatform: Platform | null;
}

const Platforms = ({ selectedPlatform, newPlatform }: Props) => {
  const { data, error } = usePlatforms();

  if (error) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {newPlatform ? newPlatform.name : "Platforms"}
      </MenuButton>
      <MenuList>
        {data.map((platform) =>
          platform.id !== 2 ? (
            <MenuItem
              key={platform.id}
              onClick={() => {
                selectedPlatform(platform);
              }}
            >
              {platform.name}
            </MenuItem>
          ) : null
        )}
      </MenuList>
    </Menu>
  );
};

export default Platforms;
