export type UserType = "admin" | "content-creator" | "user";

export type RegisterResponse = {
  msg: string;
  user: {
    name: string;
    email: string;
    password: string;
    _id: string;
    _v: number;
    token: string;
  };
};

export type LogInResponse = {
  msg: string;
  token: string;
  user: UserProfile;
  session: Session;
};

export interface UserProfile {
  id: number;
  name?: string;
  first_name: string;
  last_name: string;
  middle_name?: null | string;
  full_name: string;
  email: string;
  user_name: string;
  account_type: UserType;
  gender: "male" | "female";
}

export interface Session {
  tokenId: string;
  lastActivity: string;
  _v: number;
  _id: string;
}
