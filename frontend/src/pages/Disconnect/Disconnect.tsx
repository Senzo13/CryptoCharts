import { getAuth } from 'firebase/auth';
import { useEffect } from 'react';
import { clearSession } from './utils/session';

const Disconnect = () => {
  const auth = getAuth();

  useEffect(() => {
    auth.signOut()
      .then(() => {
        clearSession();
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900">
      <h1 className="text-4xl font-bold text-white">You are disconnected</h1>
      <div className="flex justify-center">
        <button
          className="bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-600 transition duration-500 ease-in-out m-4">
          <a href="/login" className="text-white hover:text-indigo-100">Login</a>
        </button>
      </div>
    </div>
  );
};

export default Disconnect;
