import { GENDER } from 'src/common';

export interface SignUpType {
  email: string;
  name: string;
  password: string;
  gender: GENDER | '';
  birthDay: string | '';
}

export const SignUpInitialValues: SignUpType = {
  email: '',
  name: '',
  password: '',
  birthDay: '',
  gender: '',
};
