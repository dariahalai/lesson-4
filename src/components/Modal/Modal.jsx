import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { deleteUsersThunk } from 'redux/users/users.thunk';
import { Button } from 'components/Button/Button';
import { useNavigate } from 'react-router-dom';

export const Modal = ({ id, closeModal }) => {
  const dispatch = useDispatch();
  const navigate =useNavigate();
  const deleteUser = (id) => {
    dispatch(deleteUsersThunk(id));
    closeModal();
    navigate('/users')
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
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
`;
const ModalWindow = styled.div`
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  width: 30%;
  box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.5);
  z-index: 15;
`;
