import * as React from 'react';
import Typography from '@mui/material/Typography';
import { display, styled } from '@mui/system';

interface TitleProps {
  children?: React.ReactNode;
}

const StyledTitle = styled(Typography)(({ theme }) => ({
  fontSize: '2,5rem',
  fontWeight: 600,
  fontFamily: 'Montserrat',
  textAlign: 'center',
  color: '#7BC3CA',
  textTransform: 'uppercase',
  position: 'relative',
  marginTop: '36px',

  '&::after': {
    content: '""',
    width: '15%',
    height: '4px',
    backgroundColor: '#E94C9A',
    display: 'block',
    position: 'relative',
    left: '50%',
    transform: 'translateX(-50%)',
    marginTop: '10px'
  }
}));

export default function Title(props: TitleProps) {
  return (
    <StyledTitle variant="h4" color="textPrimary" gutterBottom>
      {props.children}
    </StyledTitle>
  );
}