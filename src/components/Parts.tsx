import React, { useContext, useState, Fragment } from 'react';
import { styled } from '@mui/system';
import { PartsContext } from '../context/parts/context';
import { Part } from '../types';
import { GridLoader } from 'react-spinners';

const ButtonBase = {
  gridRow: 'b',
  fontSize: '1.5rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: '2rem'
}
const LeftButton = styled('div')(({ theme }) => ({
  gridColumn: '1 / 4',
  ...ButtonBase
}))
const RightButton = styled('div')(({ theme }) => ({
  gridColumn: '4 / 6',
  ...ButtonBase
}))
interface IHeaderBar {
  displayBackgrounds: boolean,
  setDisplay: (b: boolean) => void
}
function HeaderBar({ displayBackgrounds, setDisplay }: IHeaderBar) {
  return (
    <Fragment>
      <LeftButton sx={displayBackgrounds ? {} : { background: '#549C7E' }} onClick={() => setDisplay(false)}>Parts</LeftButton>
      <RightButton sx={displayBackgrounds ? { background: '#549C7E' } : {}} onClick={() => setDisplay(true)}>Backgrounds</RightButton>
    </Fragment>
  )
}

const Container = styled('div')(({ theme }) => ({
  display: 'grid',
  gridColumn: '1 / 6',
  gridRow: 'c / l',
  gridGap: '2em',
  gridTemplateColumns: ['a0', 'a1','a2', 'a3', 'a4', 'a5'].map(x => `[${x}] 1fr `).join(''),
  gridTemplateRows: 'abcdefghijk'.split('').map(x => `[${x}] 1fr `).join(''),
  alignItems: 'center',
  overflowY: 'scroll'
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
  const { partImages, selectedParts, setPart, setBackground } = useContext(PartsContext)
  const [displayBackgrounds, setDisplay] = useState<boolean>(false)
  if (!partImages || !partImages.parts) return <GridLoader size={100} />
  console.log({partImages})
  return (
  <Fragment>
    <HeaderBar displayBackgrounds={displayBackgrounds} setDisplay={setDisplay} />
    <Container>
      {!displayBackgrounds && partImages.parts.map(((p: Part, i: number) => <PartContainer key={p.path} part={p} idx={i} setPart={setPart} selected={selectedParts.has(p.path)} />))}
      {displayBackgrounds && partImages.backgrounds.map(((p: Part, i: number) => <PartContainer key={p.path} part={p} idx={i} setPart={setBackground} selected={selectedParts.has(p.path)} />))}
    </Container>
  </Fragment>
  );
}

export default Info
