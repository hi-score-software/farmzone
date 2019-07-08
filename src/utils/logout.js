const logoutUser = () => {
  const current_user = window.localStorage.getItem('current_user');
  if(!current_user) return;
  window.localStorage.removeItem('current_user')
  window.location.reload();
}

export default logoutUser;