import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { useLocation, useNavigate } from 'react-router-dom';
import { updateUser } from 'redux/users/users.thunk';


export const UpdateUser = () => {
  const location = useLocation();
  const [form, setForm] = useState(location?.state?.user);
const dispatch =useDispatch();
  const navigate = useNavigate();


  const handleChange = ({ target: { name, value } }) => {
    setForm(prev => ({ ...prev, [name]: value }));
  };
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(updateUser(form))
    navigate('/users/'+form.id);
  };
  return (
    <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '8px' }}>
      <label>
        address
        <input onChange={handleChange} value={form.address} name="address" type="text" />
      </label>
      <label>
        avatar
        <input onChange={handleChange} value={form.avatar} name="avatar" type="text" />
      </label>
      <label>
        email
        <input onChange={handleChange} value={form.email} name="email" type="email" />
      </label>
      <label>
        name
        <input onChange={handleChange} value={form.name} name="name" type="text" />
      </label>
      <label>
        phone
        <input onChange={handleChange} value={form.phone} name="phone" type="tel" />
      </label>
      <button type='submit'>Update User</button>
    </form>
  );
};
