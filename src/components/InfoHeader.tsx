import React, { Fragment } from 'react';
import { styled } from '@mui/system';

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

function InfoHeader() {
  return (
    <Fragment>
      <AboutSpan>ABOUT DEFACES</AboutSpan>
      <RoadmapSpan>ROADMAP</RoadmapSpan>
      <PlaygroundSpan>PLAYGROUND</PlaygroundSpan>
    </Fragment>
  )
}

export default InfoHeader
