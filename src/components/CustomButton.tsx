import { Button } from '@mui/material';
import Loader from './Loader';
import { useTheme } from '@mui/material/styles';
import { FC } from 'react';
import { CustomButtonProp } from './type';

const CustomButton: FC<CustomButtonProp> = ({ isSubmitting, variant, title, ...rest }) => {
  const theme = useTheme();
  // bgColor
  return (
    <Button
      disableElevation
      disableRipple
      sx={{
        lineHeight: 1.5,
        fontWeight: 600,
        textTransform: 'capitalize',
        color: '#fff',
        fontSize: { md: '1.6rem', xs: '1.4rem' },
        width: '100%',
        py: '.5em',
        backgroundColor: theme.palette.primary.main,
      }}
      variant={variant}
      size="medium"
      {...rest}
    >
      {!isSubmitting && title}

      {isSubmitting && <Loader size={20} color="#fff" />}
    </Button>
  );
};
CustomButton.defaultProps = {
  variant: 'contained',
};
export default CustomButton;
