const context = 'http://localhost:8009/api/v1/';
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

    delete: () =>  `${context}delete/card`
  }
};
