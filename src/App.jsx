import React, { useEffect } from 'react';
import { useAppDispatch } from './redux/hooks';
import { fetchUserData } from './redux/slices/authSlice';
import AppRouter from './routes/AppRouter';

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    // Check if user is already logged in
    dispatch(fetchUserData());
  }, [dispatch]);

  return <AppRouter />;
}

export default App;