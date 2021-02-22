import * as React from "react";
import styled from "styled-components";
import BaseLayout from "../../components/base/Layout/BaseLayout";
import SimulationCard from "../../components/SimulationCard/SimulationCard";
import {
  SimulationModel,
  SimulationStatus,
} from "../../models/Simulation/Simulation.model";

interface ISimulationPageProps {}

const simulationMock: SimulationModel = {
  id: 1,
  createdAt: new Date(),
  percentage: 20,
  status: SimulationStatus.ACTIVE,
};
const SimulationPage: React.FunctionComponent<ISimulationPageProps> = (
  props
) => {
  return (
    <BaseLayout>
      <div>
        <h1>Simulations</h1>
        <PageWrapper>
          <SimulationCard simulation={simulationMock} />
          <SimulationCard simulation={simulationMock} />
          <SimulationCard simulation={simulationMock} />
          <SimulationCard
            simulation={{
              ...simulationMock,
              percentage: 100,
              status: SimulationStatus.FINISHED,
            }}
          />
          <SimulationCardNew>
            <div>+ New Simulation</div>
          </SimulationCardNew>
        </PageWrapper>
      </div>
    </BaseLayout>
  );
};

const PageWrapper = styled.div`
  padding: 30px;
  margin: 10px;
  background-color: #111;
  display: flex;
  flex-wrap: wrap;
`;

const SimulationCardNew = styled.div`
  width: 300px;
  height: 150px;
  border: dashed 2px #626262;
  border-radius: 5px;
  padding: 20px;
  text-align: center;
  margin: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  font-weight: 600;
  font-size: 22px;
  justify-content: center;
`;
export default SimulationPage;
