import { ButtonProps, PopoverProps } from '@mui/material';
import { ReactNode } from 'react';
export interface LoaderProp {
  color?: string;
  size?: number;
}

export interface CustomButtonProp extends ButtonProps {
  isSubmitting?: boolean;
  title: string;
  to?: string;
  target?: string;
}
export interface BasicMenuProp {
  anchorEl: PopoverProps['anchorEl'];
  open: boolean;
  handleClose: () => void;
  children: ReactNode;
}

export interface ModalProps {
  isOpen: boolean;
  handleClose: () => void;
}
