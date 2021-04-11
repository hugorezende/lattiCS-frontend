import { Button, Col, message, Row } from "antd";
import * as React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import BaseLayout from "../../components/base/Layout/BaseLayout";
import { PageWrapper } from "../../components/base/StyledComponents/PageWrapper";
import SimulationsService from "../../services/Simulations/Simulations.service";

interface ICreateSimulationPageProps {}

const CreateSimulationPage: React.FunctionComponent<ICreateSimulationPageProps> = (
  props
) => {
  const { register, handleSubmit, watch, errors } = useForm();
  const history = useHistory();
  const createNewSimulation = (data: any) => {
    SimulationsService.create(data).then((res) => {
      if (res.success) {
        history.push("/simulation");
      } else {
        message.error("Something wrong has occured");
      }
    });
  };
  return (
    <BaseLayout>
      <div>
        <h1>Create New Simulation</h1>
        <PageWrapper>
          <form onSubmit={handleSubmit(createNewSimulation)}>
            <Row>
              <Col span={6}>
                <div className='form-group'>
                  <label>
                    Simulation Title
                    <input type='text' name='param1' ref={register}></input>
                  </label>
                </div>
              </Col>
              <Col span={6}>
                <div className='form-group'>
                  <label>
                    Tag
                    <input type='text' name='param2' ref={register}></input>
                  </label>
                </div>
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <Button type='primary' htmlType='submit'>
                  Create New Simulation
                </Button>
              </Col>
            </Row>
          </form>
        </PageWrapper>
      </div>
    </BaseLayout>
  );
};

export default CreateSimulationPage;
