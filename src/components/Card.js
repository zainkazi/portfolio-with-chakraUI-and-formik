import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <VStack bg="white" color="black" borderRadius="md">
      <Image src={imageSrc} alt="project image" />
      <VStack alignItems="left" p={5}>
        <Heading as="h3">{title}</Heading>
        <Text>{description}</Text>
        <a href="#">
          See more <FontAwesomeIcon icon={faArrowRight} size="1x" />
        </a>
      </VStack>
    </VStack>
  );
};

export default Card;
