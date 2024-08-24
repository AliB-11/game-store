import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

export interface Order {
  value: string;
  label: string;
}

interface Props {
  setOrder: (order: Order) => void;
  newOrder: Order | null;
}

const OrderList = ({ setOrder, newOrder }: Props) => {
  const filter = [
    { value: " ", label: "Relevance" },
    { value: "-added", label: "Data added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Released Date" },
    { value: "-metacratic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by: {newOrder?.label || "Relevance"}
      </MenuButton>
      <MenuList>
        {filter.map((order) => (
          <MenuItem key={order.value} onClick={() => setOrder(order)}>
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default OrderList;
