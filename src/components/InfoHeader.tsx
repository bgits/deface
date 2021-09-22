import React, { Fragment } from 'react';
import { styled } from '@mui/system';
import { useHistory, useLocation } from 'react-router-dom'

const baseText = {
  display: 'flex',
  alignItems: 'flex-end',
  color: 'white',
  fontSize: '12px'
};

const AboutSpan = styled('span')(({ theme }) => ({
  gridColumnStart: 'a7',
  ...baseText
}));
const RoadmapSpan = styled('span')(({ theme }) => ({
  gridColumnStart: 'a8',
  ...baseText
}));
const PlaygroundSpan = styled('span')(({ theme }) => ({
  gridColumnStart: 'a9',
  ...baseText
}));

const border = {
  borderImage: 'linear-gradient(45deg, rgb(99 30 149), rgb(203 0 84), rgb(250 134 66)) 1',
  borderStyle: 'solid',
  borderWidth: '1px',
  borderRadius: '25px',
  marginTop: '5em'
}

function InfoHeader() {
  let history = useHistory();
  let location = useLocation();
  const pathName = location.pathname.split('/')[1];
  return (
    <Fragment>
      <AboutSpan>ABOUT DEFACES</AboutSpan>
      <RoadmapSpan>ROADMAP</RoadmapSpan>
      <PlaygroundSpan sx={pathName === "playground" ? border : {}} onClick={() => history.push('/playground') }>PLAYGROUND</PlaygroundSpan>
    </Fragment>
  )
}

export default InfoHeader
