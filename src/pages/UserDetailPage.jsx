import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { selectCurrentUser } from 'redux/users/users.selector';
import { fetchUser } from 'redux/users/users.thunk';
import { Modal } from 'components/Modal/Modal';
import { useState } from 'react';
import { Button } from 'components/Button/Button';

const UserDetailPage = () => {
  const [userIdState, setUserIdState] = useState('');
  const dispatch = useDispatch();
  const { userId } = useParams();
  const currentUser = useSelector(selectCurrentUser);
  const location = useLocation();
  const navigate = useNavigate();


  useEffect(() => {
    dispatch(fetchUser(userId));
  }, [dispatch, userId]);

  const handleBack = () => {
    navigate(location?.state?.from ?? '/users');
  };
  return (
    <>

      {currentUser && (
        <>
          <div>
            <button onClick={handleBack} type="button">
              Go back
            </button>
            <img src={currentUser.avatar} alt={currentUser.name} />
            <h2>Name: {currentUser.name}</h2>
            <p>Email: {currentUser.email}</p>
            <p>Phone: {currentUser.phone}</p>
            <p>Address: {currentUser.address}</p>
            <Link to={`/users/update/${currentUser.id}`} state={{from:location,user:currentUser}}>Update User</Link>
            <Button text="Delete" clickHandler={() => setUserIdState(currentUser.id)} />
          </div>
          {userIdState && <Modal id={userIdState} closeModal={()=>setUserIdState('')} />}
        </>
      )}
    </>
  );
};

export default UserDetailPage;
