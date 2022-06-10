import { executeGet } from 'utils/request';
import { AppThunk } from 'stores';
import { savedItems } from './save.actions';

export const saveItem = (userId: number): AppThunk => (
  async dispatch => {
    const item = await executeGet(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
    
    dispatch(savedItems(item));
  }
);