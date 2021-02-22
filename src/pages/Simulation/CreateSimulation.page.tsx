import * as React from "react";
import BaseLayout from "../../components/base/Layout/BaseLayout";
import { PageWrapper } from "../../components/base/StyledComponents/PageWrapper";

interface ICreateSimulationPageProps {}

const CreateSimulationPage: React.FunctionComponent<ICreateSimulationPageProps> = (
  props
) => {
  return (
    <BaseLayout>
      <div>
        <h1>Create New Simulation</h1>
        <PageWrapper></PageWrapper>
      </div>
    </BaseLayout>
  );
};

export default CreateSimulationPage;
