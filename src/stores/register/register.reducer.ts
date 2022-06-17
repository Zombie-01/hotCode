import { Register, RequestRegisterAction, REQUEST_REGISTER} from './register.actions';

type registerState = Register;

const initialState: registerState = {
  state: {
    name: '',
    lastName: '',
    cost: '',
    date: null,
    phone: '',
    imgs: {
      img_01: '',
      img_02: '',
      img_03: ''
    }
  }
};

export default (
  state: registerState = initialState,
  action: RequestRegisterAction
): registerState => {
  switch (action.type) {
  case REQUEST_REGISTER: {
    const register = action.register;
    return register;
  }
  default: 
    return state;
  }
};
