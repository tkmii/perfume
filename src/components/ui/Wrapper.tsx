import { type WrapperProps } from '../../types'

const Wrapper = ({ children }: WrapperProps) => {
  return (
      <div className="wrapper">
        {children}
      </div>
  );
};

export default Wrapper;