
import { useSelector } from 'react-redux';
import { selectUsers } from 'redux/users/users.selector';

import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button } from 'components/Button/Button';

export const UsersList = () => {
const navigate = useNavigate();
  const users = useSelector(selectUsers);
  const location = useLocation()

  const handleAddUser =()=>{
    navigate('add')
  }

  return (
    <>
      <ul>
        {users.map(({ name, email, id }) => (
          <li key={id}>
            <Link to={id} state={{from:location}}>{name}</Link>
             {/* Email:{email} */}
           
          </li>
        ))}
      </ul>
      <Button text={'add user'} clickHandler ={()=>handleAddUser()}/>
    </>
  );
};
