import { executePost } from 'utils/request';
import { AppThunk } from 'stores';
import { baseURLDodomo } from 'axios';
import { Register } from './register.actions';
import state from './register.reducer';

console.log(state);
export const reguestUser = (state: Register): AppThunk => (
  async dispatch => {
    const register = await executePost(`${baseURLDodomo}`, state);
  }
);