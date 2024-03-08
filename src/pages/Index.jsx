import React from "react";
import { Box, Heading, Text, Stack, Link, Container, VStack, HStack, IconButton, useColorModeValue } from "@chakra-ui/react";
import { FaArrowUp, FaHackerNews } from "react-icons/fa";

// Mock data for demonstration purposes
const newsItems = [
  {
    id: 1,
    title: "Introducing the new React framework",
    url: "https://reactframework.example.com",
    points: 256,
    author: "johndoe",
    time: "3 hours ago",
  },
  // ... other news items
];

const Index = () => {
  return (
    <Container maxW="container.md" py={5}>
      <VStack spacing={4} align="stretch">
        <Box>
          <HStack justifyContent="space-between">
            <Heading size="lg">
              <FaHackerNews /> HackerNews
            </Heading>
          </HStack>
        </Box>
        <Stack spacing={3}>
          {newsItems.map((item) => (
            <HStack key={item.id} p={4} bg={useColorModeValue("gray.100", "gray.700")} rounded="md" alignItems="center" justifyContent="space-between">
              <VStack align="start">
                <Link href={item.url} isExternal fontWeight="bold">
                  {item.title}
                </Link>
                <Text fontSize="sm">
                  {item.points} points by {item.author} {item.time}
                </Text>
              </VStack>
              <IconButton aria-label="Upvote" icon={<FaArrowUp />} size="sm" variant="ghost" colorScheme="orange" />
            </HStack>
          ))}
        </Stack>
      </VStack>
    </Container>
  );
};

export default Index;
