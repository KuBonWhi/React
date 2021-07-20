import { Box, Button, Flex, Icon } from "@chakra-ui/react";
import React, { FC } from "react";
import { BsTrash } from "react-icons/bs";
import { BsCheck } from "react-icons/bs";

export type itemProps = {
  id: number;
  check: boolean;
  content: string;
  onRemove: any;
  onToggle: any;
};

export const Item: FC<itemProps> = (props) => {
  return (
    <Flex h="1rem">
      <Box w="30rem">
        <Flex>
          {props.check ? (
            <Button
              bgColor="white"
              marginTop="1rem"
              w="1rem"
              h="1rem"
              onClick={() => props.onToggle(props.id)}
            >
              <Icon w="1rem" h="1rem" as={BsCheck} />
            </Button>
          ) : (
            <Button
              bgColor="white"
              marginTop="1rem"
              w="1rem"
              h="1rem"
              onClick={() => props.onToggle(props.id)}
            ></Button>
          )}
          {props.check ? (
            <Box
              textDecoration="line-through"
              color="#ccc"
              marginLeft="1rem"
              fontSize="1.5rem"
              fontWeight="bold"
              fontFamily="times new roman"
            >
              {props.content}
            </Box>
          ) : (
            <Box
              fontWeight="bold"
              fontFamily="times new roman"
              marginLeft="1rem"
              fontSize="1.5rem"
            >
              {props.content}
            </Box>
          )}
        </Flex>
        <Box marginTop="0.5rem" bgColor="black" h="0.05rem"></Box>
      </Box>
      <Button
        marginLeft="1rem"
        marginTop="0.5rem"
        w="2rem"
        h="2rem"
        bgColor="white"
        border="0"
        onClick={() => props.onRemove(props.id)}
      >
        <Icon w="2rem" h="2rem" as={BsTrash} />
      </Button>
    </Flex>
  );
};

export default Item;
