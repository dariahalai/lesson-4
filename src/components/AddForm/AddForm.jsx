import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addUser } from 'redux/users/users.thunk';

export const AddForm = () => {
  const [form, setForm] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleChange = ({ target: { name, value } }) => {
    setForm(prev => ({ ...prev, [name]: value }));
  };
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addUser(form));
    navigate('/users')
  };
  return (
    <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '8px' }}>
      <label>
        address
        <input onChange={handleChange} name="address" type="text" />
      </label>
      <label>
        avatar
        <input onChange={handleChange} name="avatar" type="text" />
      </label>
      <label>
        email
        <input onChange={handleChange} name="email" type="email" />
      </label>
      <label>
        name
        <input onChange={handleChange} name="name" type="text" />
      </label>
      <label>
        phone
        <input onChange={handleChange} name="phone" type="tel" />
      </label>
      <button>Add User</button>
    </form>
  );
};
