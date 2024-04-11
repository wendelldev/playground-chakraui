import {
  Avatar,
  Box,
  Flex,
  HStack,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
} from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";
import { IoSearchCircleOutline } from "react-icons/io5";
import { useSidenav } from "../sidenav/sidenav-context/sidenav-context";

const Header = () => {
  const { onOpen } = useSidenav();

  return (
    <Flex
      as="header"
      align="center"
      justify="space-between"
      borderBottom="1px solid"
      borderColor="gray.200"
      paddingBottom="1rem"
    >
      <Flex align="center" flex={5}>
        <HStack spacing="1rem" width="100%">
          <IconButton aria-label="menu" onClick={onOpen} icon={<FiMenu />} />

          {/* Barra de Busca */}
          <InputGroup width="50%">
            <InputLeftElement pointerEvents="none">
              <IoSearchCircleOutline color="gray.500" />
            </InputLeftElement>
            <Input type="text" placeholder="Buscar..." />
          </InputGroup>
        </HStack>
      </Flex>

      {/* Avatar e Nome de Usuário */}
      <Flex align="center" flex={1}>
        <Avatar
          size="sm"
          name="Wendell Lucena"
          src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=2643&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          marginRight="1rem"
        />
        <Text fontSize="sm" fontWeight="bold">
          Wendell Lucena
        </Text>
      </Flex>
    </Flex>
  );
};

export default Header;
