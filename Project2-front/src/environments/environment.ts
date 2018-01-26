// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
const context = 'http://localhost:8009/api/v1/';
export const environment = {
  production: false,
  context: context,

  board: {
    fetchByBatchIdByWeek: (batchId: number, week: number) => `${context}trainer/assessment/${batchId}/${week}`,

    save: (userId: number) => `${context}api/v1/create/board/${userId}`,

    get: (userId: number) => `${context}api/v1/get/boards/${userId}`,
  },

  user: {
    login: () => `${context}api/v1/login`,

    register: () => `${context}api/v1/register`
  },

  card: {
    save: (swimLaneId: number) => `${context}api/v1/createCard/${swimLaneId}`
  }
};
