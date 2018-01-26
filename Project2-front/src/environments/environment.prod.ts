const context = 'http://localhost:8009/api/v1/';
export const environment = {
  production: true,
  context: context,

  board: {
    fetchByBatchIdByWeek: (batchId: number, week: number) => `${context}trainer/assessment/${batchId}/${week}`,

    save: (userId: number) => `${context}api/v1/create/board/${userId}`,

    get: (userId: number) => `${context}api/v1/get/boards/${userId}`,
  },

  user: {
    login: () => `${context}api/v1/login`,

    register: () => `${context}api/v1/register`,
  },

  card: {
    save: (swimLaneId: number) => `${context}api/v1/createCard/${swimLaneId}`,
  }
};
