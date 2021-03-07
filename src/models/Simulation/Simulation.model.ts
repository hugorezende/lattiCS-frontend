export enum SimulationStatus {
  SCHEDULED = 1,
  RUNNING = 2,
  PAUSED = 3,
  FINISHED = 4,
  CANCELLED = 5,
  ERROR = 6,
}

export const simulationStatusString = [
  "",
  "Scheduled",
  "Running",
  "Paused",
  "Finished",
  "Cancelled",
  "Error",
];

export interface SimulationModel {
  // created_datetime: "2021-02-24T11:55:15.000Z";
  // end_datetime: null;
  // finished_percentage: 0;
  // id: 2;
  // input_data_url: null;
  // output_data_url: null;
  // owner: 2;
  // simulation_batch_id: null;
  // start_datetime: null;
  // status_simulation_id: 1;

  id: number;
  status: SimulationStatus;
  createdDatetime: Date;
  endDatetime?: Date;
  owner: number;
  simulationBatchId?: number;
  finishedPercentage: number;
}
