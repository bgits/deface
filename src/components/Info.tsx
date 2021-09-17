import React, { Fragment } from 'react';
import { styled } from '@mui/system';

//@ts-ignore
const Container = styled('div')(({ theme }) => ({
  background: 'black',
  gridColumn: '6 / 12',
  gridRow: 'a / l'
}));

export default function () {
  return (
    <Container>test</Container>
  );
}
