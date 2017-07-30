/**
*
* TypeOverlay
*
*/

import React, {PropTypes} from 'react';
import styled from 'styled-components';
import { getToolTypeColor } from 'components/CommonComponents';
import Isvg from 'react-inlinesvg';
import MethodologyFlag from 'assets/images/flag/methodology.svg';
import PrincipleFlag from 'assets/images/flag/principle.svg';
import TacticFlag from 'assets/images/flag/tactic.svg';
import TheoryFlag from 'assets/images/flag/theory.svg';

import BigMethodologyFlag from 'assets/images/patterns/snapshotoverlay/methodology.svg';
import BigPrincipleFlag from 'assets/images/patterns/snapshotoverlay/principle.svg';
import BigTacticFlag from 'assets/images/patterns/snapshotoverlay/tactic.svg';
import BigTheoryFlag from 'assets/images/patterns/snapshotoverlay/theory.svg';


const FlagContainer = styled.div`
  position: absolute;
  opacity: .5;
  left: 0;
  top: 0;
  width: 115%;
  height: 100%;

  svg circle,
  svg line,
  svg polyline {
    stroke: ${props=>getToolTypeColor(props.type)};
  }

  .isvg, svg {
    width: 100%;
    height: 100%;
  }
`;
const FlagViewport = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-image: url(${p=>p.bgimage});
  background-repeat: repeat;
`;
const Flag = styled(Isvg)`
  display: ${props=>props.show?'block':'none'};
  position: absolute;
  top: 0;
  left: 0;
`;

function TypeOverlay(props) {

  const getTypeImage = (type) => {

    switch(type) {
      case 'tactic': return BigTacticFlag;
      case 'methodology': return BigMethodologyFlag;
      case 'principle': return BigPrincipleFlag;
      case 'theory': return BigTheoryFlag;
    }
  }
  //iF there's only one truth here, we show big flag.

  return (
    <FlagContainer type={props.type}>
      <FlagViewport bgimage={getTypeImage(props.type)}></FlagViewport>
    </FlagContainer>
  );
}

TypeOverlay.propTypes = {
  type: PropTypes.string.isRequired
};

export default TypeOverlay;
