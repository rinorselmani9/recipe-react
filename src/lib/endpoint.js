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
  deleteRecipeByAdmin: { url: '/recipe/admin-delete/', method: 'POST' },
  getUsers: { url: '/users', method: 'GET' },
  getSingleUser: {url:'/users/', method:'GET'},
  getUserRecipe:{url:'/recipe/',method:'GET'},
  editUser:{url:'/users/',method:'POST'},
  deleteUserByAdmin:{url:'/users/delete/',method:'DELETE'},
  editRecipeImage:{url:'/recipe/edit-image/', method:'POST'},
  giveRecipeRating:{url:'/recipe/rate/',method:'POST'},
  changeProfilePicture:{url:'/users/update-profile-image/',method:'POST'}
}
export default endpoint
