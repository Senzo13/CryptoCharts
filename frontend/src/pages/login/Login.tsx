import { useState, useEffect } from 'react';
import bgCity from '../../assets/bg-city.png';
import eyeClose from '../../assets/sharingan2.png';
import eyeOpen from '../../assets/cette-fois-ci-cest-la-bonne-non-coupe-oue-attend.png';
import axios from 'axios';
import WrongAlert from '../../components/alerts/WrongAlert';
import { ProfileTypesValidator } from '../register/register.d';
import GoodAlert from '../../components/alerts/GoodAlert';
import { getToken, storeToken } from './utils/jwt';
import { useNavigate } from 'react-router';
import googleLogo from '../../assets/google.svg';
import facebookLogo from '../../assets/facebook-f.svg';
import '../../firebase/config';
import { getAuth, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider } from 'firebase/auth';
const Login = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm(oldState => ({ ...oldState, [e.target.name]: e.target.value }));
  };
  const [errors, setErrors] = useState<ProfileTypesValidator>(
    {
      state: false,
      reason: undefined
    });
  const [success, setSuccess] = useState(false);



  useEffect(() => {
    if (getToken('token') && localStorage.getItem('user')) {
      navigate('/');
    }
  }, []);

  const handleFacebookLogin = () => {
    const auth = getAuth();
    const provider = new FacebookAuthProvider();
    provider.setCustomParameters({ prompt: 'select_account' });
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        const email = result.user.email;
        const providerString = 'facebook';
        axios.post('/auth/login', {
          email: email,
          provider: providerString
        })
          .then((response) => {

            storeToken('token', response.data.token);
            navigate('/');
            setSuccess(true);
          })
          .catch((error) => {
            setErrors({ state: true, reason: error.response.data.message });
          });
        navigate('/');
      }).catch((error) => {
        setErrors({ state: true, reason: error.message });
        console.log(error.message);
      });
  };

  const handleGoogleLogin = () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({ prompt: 'select_account' });
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.

        const email = result.user.email;
        const providerString = 'google';
        axios.post('/auth/login', {
          email: email,
          provider: providerString
        })
          .then((response) => {

            storeToken('token', response.data.token);
            navigate('/');
            setSuccess(true);
          })
          .catch((error) => {
            setErrors({ state: true, reason: error.response.data.message });
          });

      }).catch((error) => {
        // Handle Errors here.
        console.log(error);

        // ...
      });
  };

  const handleLogin = () => {
    axios.post('/auth/login', {
      email: form.email,
      password: form.password
    })
      .then((response) => {

        storeToken('token', response.data.token);
        navigate('/');

        setSuccess(true);
      })
      .catch((error) => {
        setErrors({ state: true, reason: error.response.data.message });
      });
  };
  return (
    <div className="flex w-screen h-screen max-h-screen bg-[#000000] text-white justify-center ">

      <div style={{
        backgroundImage: `url(${bgCity})`,
        backgroundSize: 'cover'
      }} className="h-screen w-2/3">
        {errors.state && <WrongAlert timeout={5000} onEndTimeout={() => setErrors({ state: false, reason: undefined })} message={errors.reason} />}
        {success && <GoodAlert timeout={5000} onEndTimeout={() => setSuccess(false)} message={'You have been logged successfully'} />}
      </div>
      <div className='w-1/3 justify-center p-10'>
        <div className='w-full'>
          <h1 className='text-lg mb-2'>Login</h1>
          <p className='text-xs'>Welcome back on Black Rock Investment.</p>
        </div>

        <div className='w-full flex-col flex mt-4'>
          <input type="text" value={form.email} onChange={handleChange} name="email" className="block w-full p-4 bg-black rounded-md pl-7 pr-12 border-solid border-2 border-[#AAAAAA] my-2" placeholder="Email" />
          <div className='relative'>
            <img alt="icon eye" onClick={() => setShowPassword(!showPassword)} className='absolute top-1/2 transform -translate-y-1/2 right-4 w-6' src={!showPassword ? eyeClose : eyeOpen} />
            <input type={showPassword ? 'text' : 'password'} value={form.password} onChange={handleChange} name="password" className="block w-full p-4 bg-black rounded-md pl-7 pr-12 border-solid border-2 border-[#AAAAAA] my-2" placeholder="Password" />

          </div>
          <a href='/forgot'><p className='text-right text-[#B6B6B6]'>Forgot password ?</p></a>
        </div>

        <div className='flex justify-center flex-col'>
          <input onClick={handleLogin} className='bg-[#FFFFFF] text-black p-4 mt-6' type={'button'} value="Login" />
          <p className='text-center py-2'>or</p>
          <input onClick={() => navigate('/register')} className='bg-[#D0963E] text-black p-4' type={'button'} value="Create account" />
        </div>

        <div className='flex pt-5 justify-around'>
          <div style={{
            cursor: 'pointer'
          }} onClick={() => handleGoogleLogin()} className='flex items-center justify-center bg-white rounded-lg w-14 h-14'>

            <img alt='logo facebook' src={googleLogo} width={30} height={30} />
          </div>
          <div style={{
            cursor: 'pointer'
          }} onClick={handleFacebookLogin} className='flex items-center justify-center bg-white rounded-lg w-14 h-14'>

            <img width={20} height={20} alt='logo google' src={facebookLogo} />

          </div>
        </div>


      </div>
    </div>
  );
};
export default Login;