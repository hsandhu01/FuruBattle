import React, { useState, useEffect } from 'react';
import { getAuth, updateProfile } from 'firebase/auth';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UserProfile = () => {
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    const auth = getAuth();
    const user = auth.currentUser;
    if (user) {
      setDisplayName(user.displayName);
      setEmail(user.email);
    }
  }, []);

  const handleUpdate = async (e) => {
    e.preventDefault();
    const auth = getAuth();
    const user = auth.currentUser;
    try {
      await updateProfile(user, { displayName });
      toast.success('Profile updated successfully!');
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div>
      <h2>User Profile</h2>
      <form onSubmit={handleUpdate}>
        <input
          type="text"
          placeholder="Display Name"
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
          required
        />
        <input type="email" value={email} readOnly />
        <button type="submit">Update Profile</button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default UserProfile;