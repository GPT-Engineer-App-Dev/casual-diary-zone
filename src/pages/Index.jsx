import { Box, Container, Flex, Heading, Text, VStack, Link } from "@chakra-ui/react";

const Index = () => {
  return (
    <Box>
      {/* Header */}
      <Box as="header" bg="brand.800" color="white" py={4}>
        <Container maxW="container.lg">
          <Flex justify="space-between" align="center">
            <Heading as="h1" size="lg">My Personal Blog</Heading>
            <Flex as="nav">
              <Link href="#" mx={2} color="white">Home</Link>
              <Link href="#" mx={2} color="white">About</Link>
              <Link href="#" mx={2} color="white">Contact</Link>
            </Flex>
          </Flex>
        </Container>
      </Box>

      {/* Main Content */}
      <Container maxW="container.lg" py={8}>
        <VStack spacing={8}>
          <Box as="article" w="100%" p={4} borderWidth="1px" borderRadius="md">
            <Heading as="h2" size="md">Blog Post Title</Heading>
            <Text mt={4}>This is a placeholder for the blog post content. More content will be added here later.</Text>
          </Box>
          <Box as="article" w="100%" p={4} borderWidth="1px" borderRadius="md">
            <Heading as="h2" size="md">Another Blog Post</Heading>
            <Text mt={4}>This is another placeholder for the blog post content. More content will be added here later.</Text>
          </Box>
        </VStack>
      </Container>

      {/* Footer */}
      <Box as="footer" bg="brand.900" color="white" py={4} mt={8}>
        <Container maxW="container.lg" textAlign="center">
          <Text>&copy; 2023 My Personal Blog. All rights reserved.</Text>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;