import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface User {
  id: number;
  name: string;
}

export interface Article {
  id: number;
  title: string;
  userId: number;
}

interface ComplexState {
  users: User[];
  articles: Article[];
}

const initialState: ComplexState = {
  users: [{id: 1, name: 'John Doe'}],
  articles: [{id: 1, title: 'Article Title', userId: 1}],
};

const complexSlice = createSlice({
  name: 'complexData',
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<User>) => {
      state.users.push(action.payload);
    },
    addArticle: (state, action: PayloadAction<Article>) => {
      state.articles.push(action.payload);
    },
    // ... other reducers as needed
  },
});

export const {addUser, addArticle} = complexSlice.actions;

export default complexSlice;
