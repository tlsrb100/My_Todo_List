import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";

const TodoInsertStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
`;

const TextInputStyled = styled.input`
  width: 280px;
  padding: 10px;
  margin: 0 5px;
  border: 0;
  border-bottom: 3px solid #ccc;
  font-size: 16px;
  &:focus {
    outline: none;
  }
`;

const AddButtonStyled = styled.button`
  width: 80px;
  height: 32px;
  border: 0;
  border-radius: 10px;
  background-color: skyblue;
  /* cursor: pointer; */ //마우스 포인터 손가락 변경
`;


function TodoInsert(props) {
  const [content, setContent] = useState('');
  const inputEl = useRef();

  const handleChange = (e) => {
    setContent(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!content) return;
    // 만약 input 창이 빈채로 submit을 하려고 할 땐 return시키기
    props.onSubmit(content); //입력 내용을 상위 컴포넌트의 todos 상태 끌어올리기
    setContent(""); // submit을 한 후에는 input 창을 비우기
  };

  useEffect(() => { //처음 입력창에 커서 포커싱
    inputEl.current.focus();
  }, []);

  return (
    <TodoInsertStyled>
      <form onSubmit={handleSubmit}>
        <TextInputStyled
          ref={inputEl}
          type="text"
          name="text"
          placeholder="추가할 내용을 입력하세요."
          value={content}
          onChange={handleChange}
        />
        <AddButtonStyled
          type="submit"
          onClick={handleSubmit}
          onKeyPress={handleKeyPress}
        >
          추가
        </AddButtonStyled>
      </form>
    </TodoInsertStyled>
  );
}

export default TodoInsert;