import * as React from 'react';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';

interface TitleProps {
  children?: React.ReactNode;
}

const StyledTitle = styled(Typography)(({ theme }) => ({
  fontSize: '3rem',
  fontWeight: 700,
  textAlign: 'center',
  color: theme.palette.primary.main,
  textTransform: 'uppercase',
  letterSpacing: '3px',
  position: 'relative',
  marginBottom: '20px',

  textShadow: '2px 2px 5px rgba(0, 0, 0, 0.4)',

  '&::after': {
    content: '""',
    position: 'absolute',
    left: '50%',
    bottom: '-10px',
    width: '100%',
    height: '6px',
    backgroundColor: '#E94C9A',
    transform: 'translateX(-50%)',
    borderRadius: '3px'
  },

  '&:hover': {
    textShadow: '3px 3px 10px rgba(0, 0, 0, 0.6)',
    cursor: 'pointer',
  },
}));

export default function Title(props: TitleProps) {
  return (
    <StyledTitle variant="h4" color="textPrimary" gutterBottom>
      {props.children}
    </StyledTitle>
  );
}