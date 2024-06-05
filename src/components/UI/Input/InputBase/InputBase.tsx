import { ChangeEvent, forwardRef } from 'react';
import styles from './InputBase.module.scss';
import { IInputColors } from '../IInput';

interface InputBaseProps {
  placeholder: string;
  color?: IInputColors;
  onInputChange: (value: string) => void;
  value?: string;
  type?: string;
  id?: string;
  name?: string;
  autoComplete?: string;
}

const InputBase = forwardRef<HTMLInputElement, InputBaseProps>(
  (
    {
      placeholder: inputTextPlaceholder,
      color = IInputColors.blue,
      onInputChange,
      value,
      type = 'text',
      id,
      name,
      autoComplete,
    },
    ref
  ) => {
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      onInputChange(e.target.value);
    };

    return (
      <div className={`${styles.input} ${styles[color]}`}>
        <input
          id={id}
          name={name}
          autoComplete={autoComplete}
          placeholder={inputTextPlaceholder}
          type={type}
          value={value}
          onChange={handleChange}
          ref={ref}
        />
      </div>
    );
  }
);

InputBase.displayName = 'InputBase'; // Add displayName for better debugging

export default InputBase;
