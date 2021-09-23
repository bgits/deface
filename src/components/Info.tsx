import React, { useContext } from 'react';
import { styled } from '@mui/system';
import InfoHeader from './InfoHeader';
import Playground from './Playground';
import { useLocation } from 'react-router-dom'
import { PartsContext } from '../context/parts/context'
import { Part } from '../types'


const Container = styled('div')(({ theme }) => ({
  display: 'grid',
  background: 'black',
  gridColumn: '6 / 12',
  gridRow: 'a / l',
  gridTemplateColumns: ['a6','a7', 'a8', 'a9', 'a10', 'a11'].map(x => `[${x}] 1fr `).join(''),
  gridTemplateRows: 'abcdefghijk'.split('').map(x => `[${x}] 1fr `).join(''),
  cursor: 'url(https://ani.cursors-4u.net/cursors/cur-13/cur1156.ani), url(https://ani.cursors-4u.net/cursors/cur-13/cur1156.png), auto',
  backgroundSize: '100vh'
}));

function Info() {
  let location = useLocation();
  const pathName = location.pathname.split('/')[1];
  const { partImages, selectedBackground } = useContext(PartsContext)
  const backgroundPart: Part | undefined = !!partImages && !!partImages.backgrounds && partImages.backgrounds.find(p => p.path === selectedBackground)
  return (
    <Container sx={ backgroundPart ? { backgroundImage: `url(${backgroundPart.imageURL})`} : {} }>
      <InfoHeader />
      {pathName === "playground" && <Playground />}
    </Container>
  );
}

export default Info
