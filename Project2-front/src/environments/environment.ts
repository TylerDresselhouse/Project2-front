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

    get: (username: String) => `${context}get/user/${username}`,

    getRole: (userId: number, boardId: number) => `${context}get/BoardUserRole/${userId}&${boardId}`
  },

  card: {
    save: (swimLaneId: number) => `${context}createCard/${swimLaneId}`,

    delete: () =>  `${context}delete/card`
  },

  swimLane: {
    create: (boardId: number) => `${context}createSwimLane/${boardId}`,

    delete: (boardId: number) => `${context}delete/swimlane/${boardId}`
  },

  boardMembers: {
    get: (boardId: number) => `${context}get/users/${boardId}`
  },

  task: {
    getTasks: (cdId: number) => `${context}get/tasks/${cdId}`,

    delete: (cId: number) => `${context}delete/task/${cId}`,

    create:  (cId: number) => `${context}createTask/${cId}`,
    
    completeTask:() => `${context}checkTask/`
  }


};
