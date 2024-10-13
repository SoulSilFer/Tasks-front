import { GENDER } from 'src/common';

export interface SignUpType {
  email: string;
  name: string;
  password: string;
  gender: GENDER | '';
  birthdate: string | '';
  isGoogle: boolean;
}

export type SignUpResponse = {
  id: string;
  email: string;
  name: string;
};

export const SignUpInitialValues: SignUpType = {
  email: '',
  name: '',
  password: '',
  birthdate: '',
  gender: '',
  isGoogle: false,
};
