import React from 'react';
import { styled } from '@mui/system';
import InfoHeader from './InfoHeader';
import Playground from './Playground';

const Container = styled('div')(({ theme }) => ({
  display: 'grid',
  background: 'black',
  gridColumn: '6 / 12',
  gridRow: 'a / l',
  gridTemplateColumns: ['a6','a7', 'a8', 'a9', 'a10', 'a11'].map(x => `[${x}] 1fr `).join(''),
  gridTemplateRows: 'abcdefghijk'.split('').map(x => `[${x}] 1fr `).join(''),
  cursor: 'url(https://ani.cursors-4u.net/cursors/cur-13/cur1156.ani), url(https://ani.cursors-4u.net/cursors/cur-13/cur1156.png), auto'
}));

function Info() {
  return (
    <Container>
      <InfoHeader />
      <Playground />
    </Container>
  );
}

export default Info
