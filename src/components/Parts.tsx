import React, { useContext } from 'react';
import { styled } from '@mui/system';
import { PartsContext } from '../context/parts/context';

const Container = styled('div')(({ theme }) => ({
  display: 'grid',
  gridColumn: '1 / 6',
  gridRow: 'a / l',
  gridTemplateColumns: ['a1','a2', 'a3', 'a4', 'a5', 'a6'].map(x => `[${x}] 1fr `).join(''),
  gridTemplateRows: 'abcdefghijk'.split('').map(x => `[${x}] 1fr `).join(''),
}));

function Info() {
  //@ts-ignore
  const { partImages } = useContext(PartsContext)
  console.log({partImages})
  //const { backgrounds, parts } = partImages;
  if (!partImages || !partImages.parts) return <Container />
  return (
    <Container>
      {partImages.parts.map((p: any) => <img src={p.imageURL} />)}
    </Container>
  );
}

export default Info
