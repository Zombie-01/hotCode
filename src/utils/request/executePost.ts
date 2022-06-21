import { Register } from 'stores/register';

const executePost = (request: RequestInfo, formdata: Register): Promise<any> => (

  fetch(request , {
    method: 'POST',
    headers: {
      'Content-Type':'application/json',
      'Authorization': `${formdata.state.name}`
    },
    body: JSON.stringify(formdata)
  })
);

export default executePost;
