import React from "react";
import styled from "styled-components";

const TodoTitleStyled = styled.h1`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  margin: 40px auto;
  color: #2f3542;
`;

function TodoTitle({ title }) {
  return (<TodoTitleStyled>
    {title}
  </TodoTitleStyled>);
}

export default TodoTitle;