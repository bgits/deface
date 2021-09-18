import React from 'react';
import { styled } from '@mui/system';

const Container = styled('div')(({ theme }) => ({
  display: 'grid',
  background: 'black',
  gridColumn: '6 / 12',
  gridRow: 'a / l',
  gridTemplateColumns: ['a6','a7', 'a8', 'a9', 'a10', 'a11'].map(x => `[${x}] 1fr `).join(''),
  gridTemplateRows: 'abcdefghijk'.split('').map(x => `[${x}] 1fr `).join(''),
}));

const TestSpan = styled('span')(({ theme }) => ({
  display: 'flex',
  alignItems: 'flex-end',
  gridColumnStart: 'a7',
  color: 'white'
}))

export default function () {
  return (
    <Container><TestSpan>test</TestSpan></Container>
  );
}
