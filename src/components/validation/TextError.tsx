import { Typography } from '@mui/material';
import { ReactNode, FC } from 'react';

interface TextErrorProps {
  children?: ReactNode;
}

const TextError: FC<TextErrorProps> = ({ children }) => {
  return (
    <Typography variant="body1" color={'error'}>
      {children}
    </Typography>
  );
};

export default TextError;
