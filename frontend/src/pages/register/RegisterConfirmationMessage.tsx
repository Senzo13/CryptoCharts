import { animated, SpringValue } from 'react-spring';
import invLogo from '../../assets/logo-black-rock 1.png';
type RegisterConfirmationMessageProps = {
  animation: {
    x: SpringValue<number>;
    opacity: SpringValue<number>;
  }
};
const RegisterConfirmationMessage = ({ animation }: RegisterConfirmationMessageProps) => {
  return (<animated.div style={animation}>
    <div className='flex justify-center items-center flex-col'>
      <div className='w-full text-center'>
        <h1 className='text-lg mb-2'>Check your mailbox</h1>
        <p className='text-xs'>In order to verify your account, we've sent you confirmation email.</p>
      </div>
      <div className='w-60 h-60 flex justify-center mt-20'>
        <img className='object-center' src={invLogo} alt="bigLogo" />
      </div>
    </div>
  </animated.div>);

};
export default RegisterConfirmationMessage;