export interface ContactFormData {
  firstname: string;
  lastname: string;
  email: string;
  tel?: string;
  subject: string;
  message: string;
}

export interface ActionResponse {
  success: boolean;
  message: string;
  fieldErrors?: {
    [K in keyof ContactFormData]?: string[];
  };
  inputs?: {
    [K in keyof ContactFormData]?: string;
  };
}
