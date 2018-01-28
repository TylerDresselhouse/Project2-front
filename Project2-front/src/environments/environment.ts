// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
const context = 'http://localhost:8009/api/v1/';
export const environment = {
  production: false,
  context: context,

  board: {
    save: (userId: number) => `${context}create/board/${userId}`,

    get: (userId: number) => `${context}get/boards/${userId}`,

    invite: (userId: number, boardId) => `${context}addUB/${userId}&${boardId}`
  },

  user: {
    login: () => `${context}login`,

    register: () => `${context}register`,

    get: (username: String) => `${context}get/user/${username}`
  },

  card: {
    save: (swimLaneId: number) => `${context}createCard/${swimLaneId}`
  },

  boardMembers: {
    get: (boardId: number) => `${context}get/users/${boardId}`
  }
};
