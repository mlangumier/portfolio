export interface ContactFormData {
  firstname: string;
  lastname: string;
  email: string;
  tel?: string;
  subject: string;
  message: string;
}

export enum EStatus {
  IDLE = 'idle',
  SUCCESS = 'success',
  ERROR = 'error',
}

export interface ActionResponse {
  status: EStatus.IDLE | EStatus.SUCCESS | EStatus.ERROR;
  message: string;
  fieldErrors?: {
    [K in keyof ContactFormData]?: string[];
  };
  inputs?: {
    [K in keyof ContactFormData]?: string;
  };
}
