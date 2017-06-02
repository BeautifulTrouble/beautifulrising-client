/**
*
* TypeFlag
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

import BigMethodologyFlag from 'assets/images/flag/big-methodology.svg';
import BigPrincipleFlag from 'assets/images/flag/big-principle.svg';
import BigTacticFlag from 'assets/images/flag/big-tactic.svg';
import BigTheoryFlag from 'assets/images/flag/big-theory.svg';


const FlagContainer = styled.div`
  position: relative;

  svg circle,
  svg line,
  svg polyline {
    stroke: ${props=>getToolTypeColor(props.type)};
  }
`;

const Flag = styled(Isvg)`
  display: ${props=>props.show?'block':'none'};
  position: absolute;
  top: 0;
  left: 0;
`;

function TypeFlag(props) {

  //iF there's only one truth here, we show big flag.
  const oneTruth = [props.isTactic, props.isMethodology, props.isPrinciple, props.isTheory].filter(item=>item).length == 1;
  return (
    <FlagContainer type={props.type}>
      <Flag show={props.isTactic} src={oneTruth ? BigTacticFlag : TacticFlag}/>
      <Flag show={props.isMethodology} src={oneTruth ? BigMethodologyFlag : MethodologyFlag}/>
      <Flag show={props.isPrinciple} src={oneTruth ? BigPrincipleFlag : PrincipleFlag}/>
      <Flag show={props.isTheory} src={oneTruth ? BigTheoryFlag : TheoryFlag}/>
    </FlagContainer>
  );
}

TypeFlag.propTypes = {
  type: PropTypes.string.isRequired,
  isMethodology: PropTypes.bool,
  isPrinciple: PropTypes.bool,
  isTactic: PropTypes.bool,
  isTheory: PropTypes.bool
};

export default TypeFlag;
