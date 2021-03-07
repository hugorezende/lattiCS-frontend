import { Progress } from "antd";
import * as React from "react";
import styled from "styled-components";
import {
  SimulationModel,
  simulationStatusString,
} from "../../models/Simulation/Simulation.model";

interface ISimulationCardProps {
  simulation: SimulationModel;
}

const SimulationCard: React.FunctionComponent<ISimulationCardProps> = (
  props
) => {
  const { simulation } = props;
  return (
    <CardWrapper>
      <div className='title'>Simulation #{simulation.id}</div>
      <div className='status'>
        {simulationStatusString[simulation.status]} -{" "}
        {simulation.finishedPercentage}% done
      </div>
      <Progress
        strokeColor={{
          "0%": "#108ee9",
          "100%": "#87d068",
        }}
        percent={simulation.finishedPercentage}
        status='active'
      />
    </CardWrapper>
  );
};

const CardWrapper = styled.div`
  width: 300px;
  height: 150px;
  background-color: #626262;
  border-radius: 5px;
  padding: 20px;
  text-align: center;
  margin: 10px;
  cursor: pointer;
  &:hover {
    background-color: #464646;
  }
  .title {
    font-size: 22px;
    font-weight: 700;
  }
  .status {
    margin-bottom: 20px;
  }
`;
export default SimulationCard;
