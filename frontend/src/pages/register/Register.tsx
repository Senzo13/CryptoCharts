import { useState } from 'react';
import cityRegister from '../../assets/cityRegister.png';
import checkInbox from '../../assets/checkInbox.png';

import { useSpring } from 'react-spring';
import {
  ProfileTypesValidator,
  INVALID_USERNAME_LENGTH,
  INVALID_PASSWORD_LENGTH,
  INVALID_EMAIL_FORMAT,
  InvalidUsernameLength,
  InvalidPasswordLength,
  InvalidEmailFormat,
  INVALID_PASSWORD_FORMAT
} from './register.d';
import WrongAlert from '../../components/alerts/WrongAlert';
import { register } from '../../api/auth';
import RegisterForm from './RegisterForm';
import RegisterConfirmationMessage from './RegisterConfirmationMessage';
import errorHandler from './functions/errorHandler';
import LoadingContainer from '../../components/loading/LoadingContainer';
// import LoadingContainer from '../../components/loading/LoadingContainer';

const Register = () => {
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<ProfileTypesValidator>(
    {
      state: false,
      reason: undefined
    });
  const [showRegister, setShowRegister] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  const [registerAnimation, updateRegsiterAnimation] = useSpring(() => ({
    from: { x: -450, opacity: 1 },
    to: { x: 0, opacity: 1 }
  }));
  const [validationAnimation, updateValidationAnimation] = useSpring(() => ({
    from: { x: -450, opacity: 1 },
  }));

  const controlForm = (): InvalidUsernameLength | InvalidPasswordLength | InvalidEmailFormat => {
    const { username, email, password } = form;
    if (username.length < 4) {
      setErrors({ state: true, reason: INVALID_USERNAME_LENGTH });
      return INVALID_USERNAME_LENGTH;
    }
    if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      setErrors({ state: true, reason: INVALID_EMAIL_FORMAT });
      return INVALID_EMAIL_FORMAT;
    }
    if (password.length < 8) {
      setErrors({ state: true, reason: INVALID_PASSWORD_LENGTH });
      return INVALID_PASSWORD_LENGTH;
    }
    if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password)) {
      setErrors({ state: true, reason: INVALID_PASSWORD_FORMAT });
      return INVALID_PASSWORD_FORMAT;
    }

    return null;
  };
  const handleRegister = () => {
    if (controlForm() !== null) return;
    setIsLoading(true);
    register(form.email, form.username, form.password)
      .then(async () => {
        await updateRegsiterAnimation({
          x: -450,
          opacity: 1,
          onRest: () => setShowRegister(false)
        });
        setIsLoading(false);
        await updateValidationAnimation({
          x: 0,
          opacity: 1,
          delay: 800
        });
      })
      .catch((error: any) => {
        const code = error.response.data.code;
        errorHandler(code, (reason: string) => setErrors({
          state: true,
          reason: reason
        }));

      });



  };




  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm(oldState => ({ ...oldState, [e.target.name]: e.target.value }));
  };


  return (

    <LoadingContainer show={isLoading}>
      <div className="flex w-screen h-screen max-h-screen bg-[#000000] text-white justify-center">
        <>
          <div className="w-1/3 justify-center p-10">
            {showRegister && <RegisterForm animation={registerAnimation} handleChange={handleChange} form={form} showPassword={showPassword} setShowPassword={setShowPassword} handleRegister={handleRegister} />}
            <RegisterConfirmationMessage animation={validationAnimation} />
          </div>
          <div onLoad={() => console.log('test')} style={{
            backgroundImage: `url(${showRegister ? cityRegister : checkInbox})`,
            backgroundSize: 'cover'
          }} className="w-2/3">
            {errors.state && <WrongAlert timeout={5000} onEndTimeout={() => setErrors({ state: false, reason: undefined })} message={errors.reason} />}
          </div></>
      </div>
    </LoadingContainer>

  );
};

export default Register;