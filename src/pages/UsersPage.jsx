import { Button } from 'components/Button/Button';
import { UsersList } from 'components/UsersList/UsersList';
import { useDispatch, useSelector } from 'react-redux';
import { selectUsers } from 'redux/users/users.selector';

import { getUsersThunk } from 'redux/users/users.thunk';

const UsersPage = () => {
    const users = useSelector(selectUsers)
  const dispatch = useDispatch();

  const showUsers = () => {
    dispatch(getUsersThunk());
  };
  return (
    <>
      <Button text="Show Users list" clickHandler={showUsers} />
      {users.length > 0 && <UsersList />}
    </>
  );
};

export default UsersPage;
