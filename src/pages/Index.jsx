import { useState } from "react";
import { Box, Container, Flex, Heading, Text, VStack, Link, Input, Textarea, Button } from "@chakra-ui/react";

const Index = () => {
  const [posts, setPosts] = useState([
    { title: "Blog Post Title", content: "This is a placeholder for the blog post content. More content will be added here later." },
    { title: "Another Blog Post", content: "This is another placeholder for the blog post content. More content will be added here later." }
  ]);

  const [newPost, setNewPost] = useState({ title: "", content: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPost({ ...newPost, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPosts([...posts, newPost]);
    setNewPost({ title: "", content: "" });
  };

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
          {posts.map((post, index) => (
            <Box as="article" w="100%" p={4} borderWidth="1px" borderRadius="md" key={index}>
              <Heading as="h2" size="md">{post.title}</Heading>
              <Text mt={4}>{post.content}</Text>
            </Box>
          ))}

          <Box as="form" w="100%" p={4} borderWidth="1px" borderRadius="md" onSubmit={handleSubmit}>
            <Heading as="h2" size="md">Add New Blog Post</Heading>
            <Input
              mt={4}
              placeholder="Title"
              name="title"
              value={newPost.title}
              onChange={handleInputChange}
              required
            />
            <Textarea
              mt={4}
              placeholder="Content"
              name="content"
              value={newPost.content}
              onChange={handleInputChange}
              required
            />
            <Button mt={4} type="submit" colorScheme="blue">Submit</Button>
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