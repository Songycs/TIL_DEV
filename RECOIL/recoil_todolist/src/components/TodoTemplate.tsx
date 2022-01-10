import React from 'react';
import TodoList from './TodoList';
import TodoTitle from './TodoTitle';
import styled from 'styled-components';

const TodoTemplateContainer = styled.div`
  width: 100%;
  min-height: 100%;
  background-color: var(--main);
  display: flex;
  display: -webkit-flex;
  justify-content: center;
`;

const TodoContents = styled.div`
  width: 100%;
  min-height: 100%;
  background-color: var(--main);
  display: flex;
  display: -webkit-flex;
  justify-content: center;
  margin: auto;
  display: flex;
  display: -webkit-flex;
  flex-direction: column;
  -ms-flex-direction: column;
  align-items: center;
`

const TodoTemplate = (): JSX.Element => {
  return (
    <TodoTemplateContainer>
      <TodoContents>
        <TodoTitle />
        <TodoList />
      </TodoContents>
    </TodoTemplateContainer>
  );
};

export default TodoTemplate;