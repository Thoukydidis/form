export interface FailedReturn {
  code: string;
  message: string;
  [key: string]: any;
}

export type API<T, P> = (params: {
  endpoint: string;
  params?: T;
  payload?: P;
}) => Promise<Response | FailedReturn>;
