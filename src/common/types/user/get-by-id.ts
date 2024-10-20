import { GENDER } from 'src/common';

export interface GetUserByIdOrg {
  id: string;
  name: string;
  acronym: string;
}

export interface GetUserByIdResponse {
  id: string;
  name: string;
  email: string;
  gender?: GENDER | null;
  birthdate?: Date | null;
  isGoogle: boolean;
  picture?: string | null;
  organizations: GetUserByIdOrg[] | null;
}

export const GetUserByIdInitialState: GetUserByIdResponse = {
  id: '',
  name: '',
  email: '',
  gender: null,
  birthdate: null,
  picture: null,
  isGoogle: false,
  organizations: null,
};
