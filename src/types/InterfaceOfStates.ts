export interface Email {
  required?: boolean;
  email: string;
  valid: string | boolean;
  text: string;
}
export interface Password {
  required?: boolean;
  password: string;
  valid: string | boolean;
  text: string;
}
export interface Addres {
  [country: string]: string;
  department: string;
  city: string;
  directions: string;
}
export interface IterationKey {
  [type: string]: string;
}

export interface userInformation {
  [name: string]: string;
  lastName: string;
  dateOfBirth: string;
}
