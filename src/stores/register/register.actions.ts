export const REQUEST_REGISTER = 'REQUEST_REGISTER';

export interface Register {
    state: {
        name: string,
        lastName: string,
        cost: string,
        date: null,
        phone: string
        // imgs: {
        //     img_01: string,
        //     img_02: string,
        //     img_03: string
        // }
    }
}

export interface RequestRegisterAction {
    type: typeof REQUEST_REGISTER,
    register: Register
}

export type reguestAction = RequestRegisterAction;

export const reguestState = (register: Register): RequestRegisterAction => ({
  type: REQUEST_REGISTER,
  register
});
