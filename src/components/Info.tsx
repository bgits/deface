import React from 'react';
import { styled } from '@mui/system';
import InfoHeader from './InfoHeader';

const Container = styled('div')(({ theme }) => ({
  display: 'grid',
  background: 'black',
  gridColumn: '6 / 12',
  gridRow: 'a / l',
  gridTemplateColumns: ['a6','a7', 'a8', 'a9', 'a10', 'a11'].map(x => `[${x}] 1fr `).join(''),
  gridTemplateRows: 'abcdefghijk'.split('').map(x => `[${x}] 1fr `).join(''),
}));

function Info() {
  return (
    <Container>
      <InfoHeader />
    </Container>
  );
}

export default Info
