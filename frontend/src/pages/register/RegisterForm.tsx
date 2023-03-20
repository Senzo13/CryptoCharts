import { animated, SpringValue } from 'react-spring';
import eyeClose from '../../assets/sharingan2.png';
import eyeOpen from '../../assets/cette-fois-ci-cest-la-bonne-non-coupe-oue-attend.png';
import { useNavigate } from 'react-router';
type RegisterFormProps = {
  animation: {
    x: SpringValue<number>;
    opacity: SpringValue<number>;
  },
  handleChange: React.ChangeEventHandler<HTMLInputElement>,
  form: {
    username: string,
    password: string,
    email: string
  },
  setShowPassword: React.Dispatch<React.SetStateAction<boolean>>,
  showPassword: boolean,
  handleRegister: () => void
};
const RegisterForm = ({ animation, handleChange, form, showPassword, setShowPassword, handleRegister }: RegisterFormProps) => {
  const navigate = useNavigate();
  return (<animated.div style={animation}>
    <div className='w-full'>
      <h1 className='text-lg mb-2'>Create an account</h1>
      <p className='text-xs'>Welcome on Black Rock Investment.</p>
    </div>

    <div className='w-full flex-col flex mt-4'>
      <input type="text" value={form.username} onChange={handleChange} name="username" className="block w-full p-4 bg-black rounded-md pl-7 pr-12 border-solid border-2 border-[#AAAAAA] my-2" placeholder="Username" />
      <input type="text" value={form.email} onChange={handleChange} name="email" className="block w-full p-4 bg-black rounded-md pl-7 pr-12 border-solid border-2 border-[#AAAAAA] my-2" placeholder="Email" />
      <div className='relative'>
        <img alt="icon eye" onClick={() => setShowPassword(!showPassword)} className='absolute top-1/2 transform -translate-y-1/2 right-4 w-6' src={!showPassword ? eyeClose : eyeOpen} />
        <input type={showPassword ? 'text' : 'password'} value={form.password} onChange={handleChange} name="password" className="block w-full p-4 bg-black rounded-md pl-7 pr-12 border-solid border-2 border-[#AAAAAA] my-2" placeholder="Password" />
      </div>
    </div>

    <div className='flex justify-center flex-col'>
      <input onClick={handleRegister} className='bg-[#FFFFFF] text-black p-4 mt-6' type={'button'} value="Create account" />
      <p className='text-center py-2'>or</p>
      <input onClick={() => navigate('/login')} className='bg-[#D0963E] text-black p-4' type={'button'} value="Log in" />
    </div>

  </animated.div>);
};

export default RegisterForm;