import bgCity from '../../assets/bg-city.png';
import InvLogo from '../../assets/logo-black-rock 1.png';
import verifiedIcon from '../../assets/icon-verified 1.svg';
import { useEffect } from 'react';
import axios from 'axios';
const ConfirmAccount = () => {

  useEffect(() => {
    console.log("window.location.href.split('/')[4]", window.location.href.split('/')[4]);
    const paramsString = window.location.search;
    const searchParams = new URLSearchParams(paramsString);
    const email = searchParams.get('email');
    const token = searchParams.get('token');
    axios.post('/auth/confirm_account', {
      email: email,
      token: token
    })
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      }
      );
  }, []);

  return (
    <div className="flex w-screen h-screen">
      <div style={{
        backgroundImage: `url(${bgCity})`,
        backgroundSize: 'cover'
      }} className="h-screen w-2/3">
      </div>
      <div className='bg-black w-1/3 flex items-center flex-col'>

        <div className='text-white mt-10 ml-5'>
          <div className='flex'>
            <h1 className='font-bold mr-2 text-lg'>Account verified</h1>
            <img alt='verified icon' width={20} src={verifiedIcon} />
          </div>
          <p className='text-xs'>Congratulations, your account is now verified.</p>
        </div>
        <div className='w-60 h-60 flex justify-center mt-20'>
          <img className='object-center' src={InvLogo} alt="bigLogo" />
        </div>
      </div>
    </div>
  );
};

export default ConfirmAccount;