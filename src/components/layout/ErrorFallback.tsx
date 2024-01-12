import { Grid, Typography } from '@mui/material';
import { FallbackProps } from 'react-error-boundary';
import { FC } from 'react';
import CustomButton from '../CustomButton';
const ErrorFallback: FC<FallbackProps> = ({ error, resetErrorBoundary }) => {
  return (
    <Grid item container justifyContent={'center'} gap={3} alignItems={'center'} flexDirection={'column'}>
      <Typography variant="h3">Oops!!! </Typography>
      <Typography variant="h5">{error.message} </Typography>
      <Grid item>
        <CustomButton title="Go Home" onClick={() => resetErrorBoundary()} />
      </Grid>
    </Grid>
  );
};

export default ErrorFallback;
