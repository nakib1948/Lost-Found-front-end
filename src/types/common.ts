export type IMeta = {
  page: number;
  limit: number;
  total: number;
};
export type IErrorInfo = {
    statusCode: number;
    message: string;
    errorMessages: IErrorMessage
};

export type IErrorMessage = {
  path: string | number;
  message: string;
};
export type IResponseInfo = {
    data: any;
    meta?: IMeta;
  };
export const Gender = ["MALE","FEMALE"]