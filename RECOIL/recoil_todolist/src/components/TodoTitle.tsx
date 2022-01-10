import React from 'react';
import { GiWireCoil } from 'react-icons/gi';
import styled from 'styled-components';

const TodoTitleContainer = styled.div`
  display: flex;
  display: -webkit-flex;
  align-items: center;
  font-size: 1.8rem;
  color: var(--white);
  margin-bottom: 10px;
`;

const TodoTitle = (): JSX.Element => {
  return (
    <div className='TodoTitle'>
      <GiWireCoil/>
      <div className='TodoTitle-Title'>TodoList With Recoil</div>
    </div>
  );
};

export default TodoTitle;