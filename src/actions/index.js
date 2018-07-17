import { ADD_ARTICLE } from "../constants/ActionTypes";

export const addArticle = article => ({
  type: ADD_ARTICLE,
  payload: article
});
