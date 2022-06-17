import handleFetchError from './handleFetchError';
import { Register } from 'stores/register';

const executeGet = (request: RequestInfo, formdata: Register): Promise<any> => (
  fetch(request , {
    body: JSON.stringify(formdata)
  })
    .then(res => res.json())
    .catch(handleFetchError)
);

export default executeGet;
