import React, { useContext, Fragment } from 'react';
import { styled } from '@mui/system';
import { PartsContext } from '../context/parts/context';
import { Part } from '../types';
import { GridLoader } from 'react-spinners';

const Container = styled('div')(({ theme }) => ({
  display: 'grid',
  gridColumn: '1 / 6',
  gridRow: 'a / l',
  gridGap: '2em',
  gridTemplateColumns: ['a0', 'a1','a2', 'a3', 'a4', 'a5'].map(x => `[${x}] 1fr `).join(''),
  gridTemplateRows: 'abcdefghijk'.split('').map(x => `[${x}] 1fr `).join(''),
  overflowY: 'scroll',
  alignItems: 'center'
}));

function PartContainer({ part, idx, selected, setPart }: any) {

  const Part = styled('img')(() => ({
    gridColumnStart: `a${(idx % 4) + 1}`,
    maxHeight: '4em',
    border: selected ? '1px solid #da5568' : 'none'
  }))

  return (
    <Fragment>
      <Part src={part.imageURL} onClick={() => setPart(part.path)} />
    </Fragment>
  )

}

function Info() {
  const { partImages, selectedParts, setPart } = useContext(PartsContext)
  if (!partImages || !partImages.parts) return <GridLoader size={100} />
  return (
    <Container>
      {partImages.parts.map(((p: Part, i: number) => <PartContainer key={p.path} part={p} idx={i} setPart={setPart} selected={selectedParts.has(p.path)} />))}
    </Container>
  );
}

export default Info
