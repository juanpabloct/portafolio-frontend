// Generated by https://quicktype.io

export interface ResponseCreateUser {
  token: string;
  user: User;
}

export interface User {
  information: null;
  users_address: null;
  email: string;
}

// Generated by https://quicktype.io

export interface SessionUser {
  token: string;
  user: User;
}

export interface Information {
  id: number;
  name: string;
  lastName: string;
  dateOfBirth: null;
  createdAt: Date;
  updatedAt: Date;
  userId: number;
}

export interface UsersAddress {
  token: string;
  id: number;
  country: string;
  department: string;
  city: string;
  directions: string;
  createdAt: Date | string;
  updatedAt: Date | string;
}
