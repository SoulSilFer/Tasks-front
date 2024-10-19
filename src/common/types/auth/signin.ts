export interface SignInType {
  email: string;
  password: string;
}

export type SignInResponse = {
  access_token: string;
  email: string;
  name: string;
};

export const SignInInitialValues: SignInType = {
  email: '',
  password: '',
};
