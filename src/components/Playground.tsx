import React, { Fragment, useContext, useState } from 'react';
import { PartsContext } from '../context/parts/context';
import { styled } from '@mui/system';
import Draggable from 'react-draggable';
import { Part } from '../types';
import { range, sample } from 'lodash';

const atRandom = (x: number, y: number): number => sample(range(x, y)) || 0
const Container = styled('div')(({ theme }) => ({
  display: 'grid',
  background: 'transparent',
  gridColumn: 'a6 / 7',
  gridRow: 'b / l',
  gridTemplateColumns: ['a6','a7', 'a8', 'a9', 'a10', 'a11'].map(x => `[${x}] 1fr `).join(''),
  gridTemplateRows: 'abcdefghijk'.split('').map(x => `[${x}] 1fr `).join(''),
  cursor: 'pointer'
}));

function PartContainer({ part, idx }: any) {
  const [coordinates, setCoordinates] = useState({x: atRandom(-235, 330), y: atRandom(0, 700)})
  const handleOver = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const onControlledDrag = (e: any, position: any) => {
    const {x, y} = position;
    setCoordinates({x: x < -235 ? -235 : x, y});
  };

  const Part = styled('img')(() => ({
    gridColumn: 'a6 / a11',
    gridRow: 'a / k',
    maxHeight: '4em'
  }))

  return (
    <Fragment>
      <Draggable position={coordinates} onStart={handleOver} onDrag={onControlledDrag}>
        <Part className="box" src={part.imageURL} />
      </Draggable>
    </Fragment>
  )
}

function Playground() {
  const { partImages, selectedParts } = useContext(PartsContext)
  if (!partImages || !partImages.parts) return <Fragment />
  return(
    <Container>
      {partImages.parts.filter(p => selectedParts.has(p.path)).map((p: Part, i: number) => <PartContainer key={p.path} idx={i} part={p} />)}
    </Container>
  )
}

export default Playground
