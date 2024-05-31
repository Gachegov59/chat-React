import { ChangeEvent, FC } from 'react';
import styles from './InputBase.module.scss';
import { IInputColors } from '../IInput';

interface InputBaseProps {
  placeholder: string;
  color?: IInputColors;
  onInputChange: (value: string) => void;
  value?: string;
  type?: string;
}

const InputBase: FC<InputBaseProps> = ({
  placeholder: inputTextPlaceholder,
  color = IInputColors.blue,
  onInputChange,
  value,
  type = 'text',
}) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onInputChange(e.target.value);
  };

  return (
    <div className={`${styles.input} ${styles[color]}`}>
      <input placeholder={inputTextPlaceholder} type={type} value={value} onChange={handleChange} />
    </div>
  );
};

export default InputBase;
