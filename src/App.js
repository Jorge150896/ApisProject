import { useEffect, useReducer } from 'react';
import { AppRouter } from './routers/AppRouter';
import { AuthContext } from './auth/authContext';
import { authReducer } from './auth/authReducer';

const init = () => {
  return (
    JSON.parse(localStorage.getItem('userApisProject')) || { logged: false }
  );
};

function App() {
  const [user, dispatch] = useReducer(authReducer, {}, init);

  useEffect(() => {
    if (!user) return;
    localStorage.setItem('userApisProject', JSON.stringify(user));
  }, [user]);

  return (
    <>
      <AuthContext.Provider
        value={{
          user,
          dispatch
        }}
      >
        <AppRouter />
      </AuthContext.Provider>
    </>
  );
}

export default App;
