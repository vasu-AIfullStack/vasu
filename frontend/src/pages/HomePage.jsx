import { Container, VStack, SimpleGrid, Text } from '@chakra-ui/react';
import { DiCoda } from "react-icons/di";
import { Link } from "react-router-dom";
import { useEffect } from 'react';
import { useProductStore } from '../store/product';

const HomePage = () => {
 const { fetchProducts , products } = useProductStore();

  useEffect(() =>  {
    fetchProducts();
  },[fetchProducts]);

  console.log("products", products)

  return (
    <Container maxW = 'container.x1 py ={12}'>
      <VStack spacing = {8}>
        <Text
                  fontSize={{ base: 10, sm: 20 }}
                  fontWeight={"bold"}
                  textTransform={"uppercase"}
                  textAlign={"center"}
                  bgClip={"text"}
                  bgGradient={"linear(to-r, blue.500, green.500)"
                  }>

        Current Products <DiCoda />
        </Text>

        
        <SimpleGrid  spacing={10} w={"full"}>
          columns= {{
            base:1,
            md:2,
            lg:3
          }}
          {products.map((product) => (
              <productCard key = {product._id}  product = {product}>
              </productCard>
          ))}
        </SimpleGrid>




       <Text fontSize='x1' textAlign={"center"} fontWeight='bold' color='gray.500'>
          No Products found  { " "}
          <Link to = {"/create"}>
                  <Text as = 'span' color  = 'blue.500' _hover={{textDecoration: 'underline'}}>
                    Create a product
                  </Text>
          </Link>
        </Text>
      </VStack>
    </Container>
  )
};

export default HomePage;
