import { VStack, Container, Heading, Box, useColorModeValue,  Button, Input} from "@chakra-ui/react";
import { useState } from 'react';
import { useProductStore } from "../store/product";

const createPage = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    description: "",
  });

  const { createProduct } = useProductStore;

  //function to handle create product
  const handleCreateProduct = async () => {
    const { success, message } = await createProduct(newProduct);
    console.log(success);
    console.log(message);
  };

  return (
    <Container maxWidth={"container.sm"}>
      <VStack spacing={4}>
        <Heading as={"h1"} size={"2xl"} textAlign={"center"} mb={8}>
          Create New Product
        </Heading>
      </VStack>

      <Box
        w={"full"}
        bg={useColorModeValue("white", "gray.800")}
        p={6}
        rounded={"lg"}
        shadow={"md"}
      >
        <VStack spacing={4} mt={8} w={"full"}>
          <Input
            placeholder="Product Name"
            name="name"
            value={newProduct.name}
            onChange={(e) =>
              setNewProduct({ ...newProduct, name: e.target.value })
            }
          />
          <Input
            placeholder="Product Price"
            name="price"
            value={newProduct.price}
            onChange={(e) =>
              setNewProduct({ ...newProduct, price: e.target.value })
            }
          />
          <Input
            placeholder="Product Description"
            name="description"
            value={newProduct.description}
            onChange={(e) =>
              setNewProduct({ ...newProduct, description: e.target.value })
            }
          />
          <Button
            w={"full"}
            colorScheme={"blue"}
            mt={4}
            onClick={handleCreateProduct}
          >
            Create Product
          </Button>
        </VStack>
      </Box>
    </Container>
  );
};
export default createPage;
