import { atom } from "recoil";

export interface ITodoTypes {
  id: number;
  contents: string;
  isCompleted: boolean;
}

export const inputState = atom<string>({
  key: 'inputState',
  // key의 값은 항상 고유값

  default: '',
});

// 업데이트 시킬 Todos atom 배열
export const todosState = atom<ITodoTypes[]>({
  key: 'todos',

  // default에는 임의의 데이터
  default: [
    {
      id: 1,
      contents: 'Todo List를',
      isCompleted: false,
    },

    {
      id: 2,
      contents: '자유롭게',
      isCompleted: false,
    },

    {
      id: 3,
      contents: '추가해보세요!',
      isCompleted: false,
    }
  ],
});