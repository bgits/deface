import React, { useContext, Fragment } from 'react';
import { styled } from '@mui/system';
import { PartsContext } from '../context/parts/context';

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

function PartContainer({ part, idx }: any) {

  const Part = styled('img')(() => ({
    gridColumnStart: `a${(idx % 4) + 1}`,
    maxHeight: '4em'
  }))

  return (
    <Fragment>
      <Part src={part.imageURL} />
    </Fragment>
  )

}

function Info() {
  //@ts-ignore
  const { partImages } = useContext(PartsContext)
  console.log({partImages})
  if (!partImages || !partImages.parts) return <Container />
  return (
    <Container>
      {partImages.parts.map(((p: any, i: number) => <PartContainer key={p.path} part={p} idx={i} />))}
    </Container>
  );
}

export default Info
