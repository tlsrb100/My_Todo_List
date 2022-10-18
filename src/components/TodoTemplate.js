import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";

import TodoTitle from "./TodoTitle";
import TodoInsert from "./TodoInsert";
import TodoItemList from "./TodoItemList";

const TodoTemplateStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 530px;
  height: 700px;
  border: 0px solid #000;
  border-radius: 20px;
  background-color: #fff;
`;



function TodoTemplate() {
  const [todos, setTodos] = useState([]); //전체 todos 상태
  const nextId = useRef(1);

  useEffect(() => {
    fetch('http://localhost:3001/blogs')
      .then((res) => res.json())
      .then((data) => {
        setTodos(data)
      })
  }, []);

  const handleSubmit = (text) => { //props로 내려줄 todos 업데이트 함수
    const todo = { //입력한 content를 todo객체형식으로 가공해서 set 한다
      // id: nextId.current,
      text,
      checked: false,
    };
    console.log(nextId.current);
    console.log(todo);

    fetch('http://localhost:3001/blogs', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todo),
    }).then((res) => {
      console.log(res)
      nextId.current += 1;
      fetch('http://localhost:3001/blogs')
        .then((res) => res.json())
        .then((data) => {
          setTodos(data);
        })
    });

    // setTodos(todos.concat(todo));
  };

  const onRemove = (id) => { //todo 삭제 - 해당 id와 일치하지 않는 todo만 set한다
    fetch(`http://localhost:3001/blogs/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        fetch('http://localhost:3001/blogs')
          .then((res) => res.json())
          .then((data) => {
            setTodos(data);
          })
      });

  };

  const onToggle = (id) => {
    let selectedTodo = todos.filter((el) => {
      return el.id === id;
    })[0];
    fetch(`http://localhost:3001/blogs/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ checked: !selectedTodo.checked }),
    }).then((res) => {
      console.log(res)
      fetch('http://localhost:3001/blogs')
        .then((res) => res.json())
        .then((data) => {
          setTodos(data);
        })
    });

  };

  return (
    <TodoTemplateStyled>
      <TodoTitle title='My_Todo_List'></TodoTitle>
      <TodoInsert onSubmit={handleSubmit} />
      <TodoItemList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplateStyled>
  );
}

export default TodoTemplate;