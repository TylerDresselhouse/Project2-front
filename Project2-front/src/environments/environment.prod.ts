const context = 'http://localhost:8009/';
export const environment = {
  production: true,
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

    delete: (swimLaneId: number) =>  `${context}delete/card/${swimLaneId}`,
  },

  swimLane: {
    create: (boardId: number) => `${context}createSwimLane/${boardId}`,

    delete: (boardId: number) => `${context}delete/swimlane/${boardId}`
  },

  boardMembers: {
    get: (boardId: number) => `${context}get/users/${boardId}`
  },

  task: {
    get: (cId: number) => `${context}get/tasks/${cId}`,
    delete: (cId: number) => `${context}delete/task/${cId}`,
    create: (cId: number) => `${context}createTask/${cId}`,
    check: () => `${context}checkTask/`

  }
};
