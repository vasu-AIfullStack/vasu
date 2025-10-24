import { Container, Flex, HStack, useColorMode } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { IoMoon, IoSunny } from "react-icons/io5";
import { MdLocalGroceryStore } from "react-icons/md";
import { FaFolderPlus } from "react-icons/fa";
import { Text, Button } from "@chakra-ui/react";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Container maxW={"1140px"} px={4}>
      <Flex
        h={"16"}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexDir={{
          base: "column",
          sm: "row",
        }}
      >
        <Text
          fontSize={{ base: 22, sm: 28 }}
          fontWeight={"bold"}
          textTransform={"uppercase"}
          textAlign={"center"}
          bgClip={"text"}
          bgGradient={"linear(to-r, blue.500, green.500)"}
        >
          <Link to="/">Product Store</Link>
        </Text>

        <HStack spacing={2} alignItems={"center"}>
          <Link to={"/Create"}>
            <Button>
              <FaFolderPlus fontSize={20} />
            </Button>
          </Link>
          <Button onClick={toggleColorMode}>
            {colorMode === "light" ? <IoMoon /> : <IoSunny fontSize={20} />}
          </Button>
        </HStack>
      </Flex>
    </Container>
  );
};
export default Navbar;
