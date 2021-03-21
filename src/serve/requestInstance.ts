import Request from "./index";
import { RequestProxyType } from "./index.type";
import { AxiosRequestConfig } from "axios";

interface ConType {
  new (config: AxiosRequestConfig): RequestProxyType;
}

function createInstance(Con: ConType): RequestProxyType {
  return new Con({
    baseURL: process.env.REACT_APP_BASE_URL
  });
}

const request: RequestProxyType = createInstance(
  (Request as unknown) as ConType
);
export default request;
