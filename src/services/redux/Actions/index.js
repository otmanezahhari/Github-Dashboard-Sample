import {ActionTypes} from "../Constants";

export const getReposName = data =>(
  {
    type    : ActionTypes.GET_REPOS_NAME,
    payload : data,
  }
);

export const getCurrentUserRepos = data =>(
  {
    type    : ActionTypes.GET_GITHUB_REPOS,
    payload : data,
  }
);

export const getLanguageURl = data =>(
  {
    type    : ActionTypes.GET_LANGUAGE_URL,
    payload : data,
  }
);

export const setLanguage = data =>(
  {
    type    : ActionTypes.SET_LANGUAGE,
    payload : data,
  }
);

export const setSpecificRepos = data =>(
  {
    type    : ActionTypes.SET_SPECIFIC_REPOS,
    payload : data,
  }
);