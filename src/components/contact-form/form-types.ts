export interface ContactFormData {
  firstname: string;
  lastname: string;
  email: string;
  tel?: string;
  message: string;
}

export interface ActionResponse {
  success: boolean;
  message: string;
  errors?: {
    [K in keyof ContactFormData]?: string[];
  };
  inputs?: {
    [K in keyof ContactFormData]?: string;
  };
}
