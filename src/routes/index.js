import Loadable from 'react-loadable';
import loadingSpinner from './loading.js';


export const RegisterPage = Loadable({
  loader: () => import('../containers/Register'),
  loading: loadingSpinner
})


export const LoginPage = Loadable({
  loader: () => import("../containers/Login"),
  loading: loadingSpinner
})
