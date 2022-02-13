import { AxiosInstance, AxiosRequestConfig } from "axios";
import http from "../http";

interface ServiceOptions extends AxiosRequestConfig {
  endpoint: string;
  jwt?: string;
  onError?: (error: ServiceError) => void;
}

interface ServiceError {
  endpoint: string;
  apiMessage: string;
  status: number;
}

interface ServiceResult<T> {
  data?: T;
  message: string;
}

const createService: <T>(
  options: ServiceOptions,
  instance?: AxiosInstance,
) => Promise<T> = async <T>(
  options: ServiceOptions,
  instance?: AxiosInstance,
) => {
  const httpInstance = instance || http;

  options.url = options.endpoint;
  options.headers = { Authorization: `Bearer ${options.jwt}` };

  const res = await httpInstance.request<ServiceResult<T>>({
    ...http.options,
    ...options,
  });

  if (res.statusText === "OK" || (res.status >= 200 && res.status < 300)) {
    return res.data?.data as T;
  }

  const error: ServiceError = {
    endpoint: options.endpoint,
    apiMessage: res.data?.message || "Not specified.",
    status: res.status,
  };

  if (options.onError) {
    options.onError(error);
  }

  return Promise.reject(error);
};

export default createService;

export { login, register } from "./auth-service";

export {
  addClient,
  deleteClient,
  getClientById,
  exportClientList,
  getClientsList,
  updateClient,
} from "./clients-service";
export type { Client } from "./clients-service";

export {
  addPersonel,
  deletePersonel,
  getPersonelById,
  exportPersonelList,
  updatePersonel,
  getPersonelList,
} from "./personel-service";
export type { Personel } from "./personel-service";

export { addReport, getReportById, getReportList } from "./reports-service";
export type { ReportRevision, Report } from "./reports-service";

export {
  addRoom,
  getRoomById,
  getRoomList,
  updateRoom,
  deleteRoom,
} from "./rooms-service";
export type { Room } from "./rooms-service";

export {
  addVisitation,
  deleteVisitation,
  exportVisitationList,
  getVisitationById,
  getVisitationList,
  updateVisitation,
} from "./visitations-service";
export type { Visitation } from "./visitations-service";

export { getStats } from "./stats-service";
export type { Stats } from "./stats-service";
