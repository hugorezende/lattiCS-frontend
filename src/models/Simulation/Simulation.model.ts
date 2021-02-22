export enum SimulationStatus {
  SCHEDULED = "SCHEDULED",
  ACTIVE = "ACTIVE",
  PAUSED = "PAUSED",
  FINISHED = "FINISHED",
  CANCELLED = "CANCELLED",
  ERROR = "ERROR",
}

export interface SimulationModel {
  id: number;
  status: SimulationStatus;
  createdAt: Date;
  percentage: number;
}
