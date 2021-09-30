import React from "react";
import styled from "styled-components";
import { AiOutlineMinusCircle } from "react-icons/ai";

const ListItem = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Text = styled.p`
  all: unset;
`;
const Remove = styled.button`
  margin-right: 1.5rem;
  background: none;
  border: none;
  font-size: 1rem;
  opacity: 0;
  &:hover {
    opacity: 1;
  }
`;

const DoneListItem = () => {
  return (
    <ListItem>
      <Text></Text>
      <Remove>
        <AiOutlineMinusCircle />
      </Remove>
    </ListItem>
  );
};

export default DoneListItem;