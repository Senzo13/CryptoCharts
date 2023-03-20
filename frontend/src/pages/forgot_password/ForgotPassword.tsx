import axios from 'axios';
import { useState } from 'react';
import cryptoBG from '../../assets/cryptoBackground.jpg';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => { setEmail(e.target.value); };
  const handleLogin = () => {
    axios.get('/auth/reset_password/?user_email=' + email);
  };
  return (
    <div className="text-white h-screen w-screen bg-[#000000] flex justify-center">
      <div style={{
        backgroundImage: `url(${cryptoBG})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }} className="h-screen w-2/3">

      </div>
      <div className="bg-black w-1/3 h-screen p-10">
        <div className='mb-40'>
          <h1 className='text-lg mb-2 text-white text-center'>Forgot Your Password?</h1>
          <p className='text-xs text-white text-center '>Please confirm your email address below and we will
            send you a verification code.</p>
        </div>
        <input type="text" value={email} onChange={handleChange} name="email" className="block w-full p-4 bg-black rounded-md pl-7 pr-12 border-solid border-2 border-[#AAAAAA] my-2" placeholder="Email" />
        <div className='flex justify-center flex-col pt-4'>
          <input onClick={handleLogin} className='bg-[#D0963E] text-black p-4' type={'button'} value="Log in" />
        </div>
        <a href="/login"> <p className='mt-20 text-center'>Already have an account ? Log in</p></a>
      </div>
    </div>
  );
};
export default ForgotPassword;