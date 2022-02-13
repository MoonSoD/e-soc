import createService from "@services";

export interface Stats {
  count: {
    clients: number;
    plannedVisits: number;
    availablePlaces: number;
  };
}

export const getStats = (jwt?: string) =>
  createService<Stats>({ endpoint: "/stats", jwt });
