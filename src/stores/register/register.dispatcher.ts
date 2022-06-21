import { executePost } from 'utils/request';
import { AppThunk } from 'stores';
import { baseURLDodomo } from 'axios';


export const reguestUser = (state: any): AppThunk => (
  async () => {
    await executePost(`${baseURLDodomo}`, state);
    console.log(baseURLDodomo);
    console.log(state);
  }
);