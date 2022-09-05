const endpoint = {
  login: { url: '/login', method: 'POST' },
  register: { url: '/register', method: 'POST' },
  verifyAccount: { url: '/users/verify', method: 'POST' },
  forgotPassword: { url: '/forgot-password-request', method: 'POST' },
  resetPassword: { url: '/users/change-password', method: 'POST' },
  addRecipe: { url: '/recipe', method: 'POST' },
  getAllRecipes: { url: '/recipe', method: 'GET' },
  editRecipe: { url: '/recipe/', method: 'POST' },
  deleteRecipe: { url: '/recipe/delete/', method: 'POST' },
  getOneRecipe: { url: '/recipe/single/', method: 'GET' },
}
export default endpoint
