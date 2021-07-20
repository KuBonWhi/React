import React, { FC, useState, useRef, useCallback } from "react";
import { Box, VStack } from "@chakra-ui/layout";
import { Button, Flex, Icon, Input } from "@chakra-ui/react";
import Item from "./Item";
import { FaPencilAlt } from "react-icons/fa";

const Main: FC = () => {
  const [todos, setTodos] = useState([
    { id: 1, content: "오늘은 뭐하고놀까나?", check: false },
  ]);
  const [text, setText] = useState("");
  const nextId = useRef(2);

  const handleChange = useCallback(
    (e) => {
      setText(e.target.value);
    },
    [text]
  );

  const onRemove = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const onToggle = (id: number) => {
    setTodos(
      todos.map((todo) => {
        return todo.id === id ? { ...todo, check: !todo.check } : todo;
      })
    );
  };

  const handleSubmit = (e: { key?: string; preventDefault?: any }) => {
    e.preventDefault();
    if (!text) return;
    const todo = {
      id: nextId.current,
      content: text,
      check: false,
    };
    const array = todos.concat(todo);
    setTodos(array);
    nextId.current += 1;
    console.log(text);
    setText("");
  };

  const handleKeyPress = (e: { key: string }) => {
    if (e.key === "Enter") {
      handleSubmit(e);
    }
  };

  return (
    <Flex h="full" justifyContent="center" bgColor="#87CEFA">
      <Box
        padding="0.25rem"
        bgColor="black"
        marginTop="5rem"
        marginBottom="5rem"
        borderRadius="1rem"
        filter="drop-shadow(1px 1px 2px gray)"
      >
        <Box
          w="40rem"
          h="55rem"
          backgroundColor="white"
          borderRadius="0.5rem"
          overflow="hidden"
        >
          <VStack justifyContent="center" spacing="1.5rem">
            <Box>
              <Box
                letterSpacing="wide"
                fontSize="3rem"
                marginTop="5rem"
                w="30rem"
                bgColor="white"
                textAlign="center"
                color="orange"
                textTransform="uppercase"
                fontWeight="bold"
                fontFamily="georgia"
              >
                Today
              </Box>
              <Box
                fontWeight="bold"
                letterSpacing="wide"
                fontSize="3rem"
                w="30rem"
                bgColor="white"
                textAlign="center"
                color="orange"
                textTransform="uppercase"
                fontFamily="georgia"
              >
                My Schedule
              </Box>
            </Box>
            <Box w="33rem" h="3rem">
              <form onSubmit={handleSubmit}>
                <Flex w="33rem" h="3rem" justify="center">
                  <Input
                    type="text"
                    name="text"
                    value={text}
                    onChange={handleChange}
                    w="29rem"
                    focusBorderColor="white"
                    borderLeft="0"
                    borderRight="0"
                    borderTop="0"
                    outline="none"
                    borderColor="gray"
                    borderWidth="0.1rem"
                    autoFocus
                    fontSize="1.5rem"
                    placeholder="할일을 입력하세요^^"
                    fontFamily="times new roman"
                    fontWeight="500"
                  />
                  <Button
                    w="4rem"
                    borderRadius="2rem"
                    type="submit"
                    onClick={handleSubmit}
                    onKeyPress={handleKeyPress}
                    color="blackAlpha.300"
                    border="0"
                    bgColor="white"
                  >
                    <Icon w="1.8rem" h="1.8rem" as={FaPencilAlt} />
                  </Button>
                </Flex>
              </form>
            </Box>
            <Box h="35rem">
              {todos ? (
                todos.map((items, idx) => (
                  <Box marginTop="3rem">
                    <Item
                      key={items.id}
                      {...items}
                      onRemove={onRemove}
                      onToggle={onToggle}
                    />
                  </Box>
                ))
              ) : (
                <Box></Box>
              )}
            </Box>
          </VStack>
        </Box>
      </Box>
    </Flex>
  );
};

export default Main;
