const context = 'http://localhost:8009/api/v1/';
export const environment = {
  production: true,
  context: context,

  board: {
    save: (userId: number) => `${context}create/board/${userId}`,

    get: (userId: number) => `${context}get/boards/${userId}`,
  },

  user: {
    login: () => `${context}login`,

    register: () => `${context}register`
  },

  card: {
    save: (swimLaneId: number) => `${context}createCard/${swimLaneId}`
  }
};
