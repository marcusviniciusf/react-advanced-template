import React from 'react';
import styled, { css } from 'styled-components';
// UI Components
import { Box, Flex, Heading, Text, SmallText } from 'components';

const Container = styled.div`
  margin: 0 auto;
  padding: 0 2rem;
`;

const ColorBox = styled.div`
  height: 4rem;
  background-color: ${({ theme }) => theme.colors.secondary};
  ${({ theme }) => css`
    ${theme.media.sm} {
      background-color: black;
    }
  `}
`;

const HomePage: React.FC = () => {
  return (
    <Container>
      <Heading>Heading 1</Heading>
      <Heading as="h2" fontSize={4}>
        Heading 2
      </Heading>
      <Heading as="h3" fontSize={3}>
        Heading 3
      </Heading>
      <Text>Paragraph</Text>
      <SmallText>Small Text</SmallText>
      <Flex flexWrap="wrap" m={-1}>
        <Box p={[1]} width={[1, 1 / 2, 1 / 2, 1 / 3]}>
          <ColorBox />
        </Box>
        <Box p={[1]} width={[1, 1 / 2, 1 / 2, 1 / 3]}>
          <ColorBox />
        </Box>
        <Box p={[1]} width={[1, 1 / 2, 1 / 2, 1 / 3]}>
          <ColorBox />
        </Box>
      </Flex>
    </Container>
  );
};

export default HomePage;
