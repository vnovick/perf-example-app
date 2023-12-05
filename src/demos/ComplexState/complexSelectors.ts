import {createSelector} from '@reduxjs/toolkit';
import {RootState} from './store';

const getUsers = (state: RootState) => state.complexData.users;
const getArticles = (state: RootState) => state.complexData.articles;

export const getUsersWithArticles = createSelector(
  [getUsers, getArticles],
  (users, articles) => {
    console.log('Computing users with articles'); // Log each computation
    return users.map(user => ({
      ...user,
      articles: articles.filter(article => article.userId === user.id),
    }));
  },
);
