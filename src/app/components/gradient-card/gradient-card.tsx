import { Avatar, Card, Divider, HStack, Text, VStack } from "@chakra-ui/react";
import { FaRegClock } from "react-icons/fa";
import { GoArrowUpLeft, GoArrowUpRight } from "react-icons/go";
import { PiSunglasses } from "react-icons/pi";

export default function GradientCard() {
  return (
    <Card
      bgGradient={"linear(to-l, #7928CA, #FF0080)"}
      boxShadow={"xl"}
      p={8}
      rounded={"xl"}
      direction={"row"}
      justify={"space-evenly"}
    >
      <HStack>
        {/* cat picture */}
        <Avatar
          size="lg"
          name="Wendell Lucena"
          borderWidth={2}
          borderColor={"white"}
          src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=2643&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />

        <VStack align="start" ml={2} spacing={0.5}>
          <Text fontSize="xl" color={"white"} fontWeight={"bold"}>
            Bom dia Wendell Lucena
          </Text>

          <Text fontSize="md" color={"white"}>
            Seja bem-vindo ao seu novo aplicativo.
          </Text>
        </VStack>
      </HStack>

      <HStack align="center">
        <VStack align="center">
          <Card
            bg={"rgba(0,0,0,0.2)"}
            px={4}
            py={2}
            rounded={"xl"}
            minW={220}
            h="40px"
          >
            <HStack align="center">
              <GoArrowUpRight size={20} color="white" />

              <Text fontSize="md" color={"white"}>
                Entrada
              </Text>

              <Text fontSize="md" color={"white"} ml={50}>
                8:00
              </Text>
            </HStack>
          </Card>

          <Card
            bg={"rgba(0,0,0,0.2)"}
            px={4}
            py={2}
            rounded={"xl"}
            minW={220}
            h="40px"
          >
            <HStack align="center">
              <GoArrowUpLeft size={20} color="white" />

              <Text fontSize="md" color={"white"}>
                Saida
              </Text>

              <Text fontSize="md" color={"white"} ml={50}>
                --:--
              </Text>
            </HStack>
          </Card>
        </VStack>

        <Card
          bg={"rgba(0,0,0,0.2)"}
          align={"center"}
          justify={"center"}
          rounded={"xl"}
          minW={220}
          h="85px"
          p={4}
        >
          <HStack align="center" justify="space-between" width={"100%"}>
            <PiSunglasses size={50} color="white" />

            <VStack align={"end"}>
              <HStack align={"end"}>
                <Text
                  fontSize={"lg"}
                  color="white"
                  lineHeight={"normal"}
                  fontWeight={"bold"}
                >
                  30
                </Text>
                <Text fontSize={"sm"} color="white">
                  dias
                </Text>
              </HStack>

              <Text fontSize={"sm"} color="white">
                Férias disponíveis
              </Text>
            </VStack>
          </HStack>
        </Card>

        <Card
          bg={"rgba(0,0,0,0.2)"}
          align={"center"}
          justify={"center"}
          rounded={"xl"}
          minW={220}
          h="85px"
          p={4}
        >
          <HStack align="center" justify="space-between" width={"100%"}>
            <FaRegClock size={50} color="white" />

            <VStack align={"end"}>
              <HStack align={"end"}>
                <Text
                  fontSize={"lg"}
                  color="white"
                  lineHeight={"normal"}
                  fontWeight={"bold"}
                >
                  134
                </Text>
                <Text fontSize={"sm"} color="white">
                  hrs
                </Text>
              </HStack>

              <Text fontSize={"sm"} color="white">
                Banco de horas
              </Text>
            </VStack>
          </HStack>
        </Card>
      </HStack>
    </Card>
  );
}
