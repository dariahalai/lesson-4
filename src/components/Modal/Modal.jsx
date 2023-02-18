import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { deleteUsersThunk } from 'redux/users/users.thunk';
import { Button } from 'components/Button/Button';

export const Modal = ({ id, closeModal }) => {
  const dispatch = useDispatch();
  const deleteUser = (id) => {
    dispatch(deleteUsersThunk(id));
    closeModal();
  };

  return (
    <ModalBackdrop>
      <ModalWindow>
        <p>Are you sure to Delete User?</p>
        <ul>
          <li>
            <Button text="OK" clickHandler={()=>deleteUser(id)} />
          </li>
          <li>
            <Button text="Cancel" clickHandler={closeModal} />
          </li>
        </ul>
      </ModalWindow>
    </ModalBackdrop>
  );
};

const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: grey;
  justify-content: center;
  align-items: center;
`;
const ModalWindow = styled.div`
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  width: 50%;
  box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.5);
  z-index: 15;
`;
