import createService from "@services";
import { User } from "@services/auth-service";
import { Personel } from "@services/personel-service";

export interface Report {
  id?: number;
  date: Date;
  type: number;
  revisions: ReportRevision[];
}

export interface ReportRevision {
  id?: number;
  dateTime: string;
  content: string;
  editor: Personel;
}

export const addReport = (data: Report, jwt?: string) =>
  createService({ endpoint: "/reports", method: "POST", data, jwt });

export const getReportList = (jwt?: string) =>
  createService<Report[]>({ endpoint: "/reports", jwt });

export const getReportById = (id: string, jwt?: string) =>
  createService<Report>({ endpoint: `/reports/${id}`, jwt });
