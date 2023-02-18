import { Button } from 'components/Button/Button';
import { useSelector } from 'react-redux';
import { selectUsers } from 'redux/users/users.selector';
import { Modal } from 'components/Modal/Modal';
import { useState } from 'react';

export const UsersList = () => {
  const [userId, setUserId] = useState('');
  const users = useSelector(selectUsers);

  const closeModal = () => {
    setUserId('');
  };
  return (
    <>
      <ul>
        {users.map(({ name, email, id }) => (
          <li key={id}>
            Name:{name} Email:{email}
            <Button text="Delete" clickHandler={()=>setUserId(id)} />
          </li>
        ))}
      </ul>
      {userId && <Modal id={userId} closeModal={closeModal}/>}
    </>
  );
};
