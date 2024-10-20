export interface GetUserByIdOrg {
  id: string;
  name: string;
  acronym: string;
}

export interface GetUserByIdResponse {
  id: string;
  name: string;
  email: string;
  organizations: GetUserByIdOrg[] | null;
}
