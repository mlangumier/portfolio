export interface ContactFormData {
  firstname: string;
  lastname: string;
  email: string;
  tel?: string;
  subject: string;
  message: string;
}

export enum EStatus {
  IDLE,
  SUCCESS,
  ERROR,
}

export interface ActionResponse {
  status: EStatus;
  message?: string;
  fieldErrors?: {
    [K in keyof ContactFormData]?: string[];
  };
  inputs?: {
    [K in keyof ContactFormData]?: string;
  };
}
