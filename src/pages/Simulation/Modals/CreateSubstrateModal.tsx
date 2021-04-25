import Modal from "antd/lib/modal/Modal";
import * as React from "react";

interface ICreateSubstrateModalProps {
  isVisible: boolean;
  handleOk: () => void;
  handleCancel: () => void;
}

const CreateSubstrateModal: React.FunctionComponent<ICreateSubstrateModalProps> = (
  props
) => {
  const { isVisible, handleOk, handleCancel } = props;

  return (
    <Modal
      title='Create substrate'
      visible={isVisible}
      onOk={handleOk}
      onCancel={handleCancel}
      okText={"Create"}
    >
      <div className='form-group'>
        <label>
          Substrate Name
          <input type='text' name='param2'></input>
        </label>
      </div>

      <div className='form-group'>
        <label>
          Diff coefficient
          <input type='number' name='param2'></input>
        </label>
      </div>

      <div className='form-group'>
        <label>
          Decay rate
          <input type='number' name='param2'></input>
        </label>
      </div>
    </Modal>
  );
};

export default CreateSubstrateModal;
