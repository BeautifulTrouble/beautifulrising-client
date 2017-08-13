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
import { injectIntl } from 'react-intl';

import TypeFlagTooltip from 'containers/TypeFlagTooltip';
import BigMethodologyFlag from 'assets/images/flag/big-methodology.svg';
import BigPrincipleFlag from 'assets/images/flag/big-principle.svg';
import BigTacticFlag from 'assets/images/flag/big-tactic.svg';
import BigTheoryFlag from 'assets/images/flag/big-theory.svg';


const FlagContainer = styled.div`
  position: absolute;
  ${props=>props.lang === 'ar' ? 'right' : 'left'}: -200px;
  top: 50px;

  svg circle,
  svg line,
  svg polyline {
    stroke: ${props=>getToolTypeColor(props.type)};
  }

  @media(max-width: 700px) {
    position: absolute;
    left: -220px;
    top: 35px;
    zoom: 0.75;
  }
`;
const FlagViewport = styled.div`
  position: relative;
  width: 264px;
  height: 100px;
  overflow: hidden;
`;
const Flag = styled(Isvg)`
  position: absolute;
  display: ${props=>props.show?'block':'none'};
`;

export class TypeFlag extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      showTooltip: false
    }
  }

  handleMouseOver() {
    this.setState({ showTooltip: true });
  }

  handleMouseOut() {
    this.setState({ showTooltip: false });
  }
  render() {

    //iF there's only one truth here, we show big flag.
    const oneTruth = [this.props.isTactic, this.props.isMethodology, this.props.isPrinciple, this.props.isTheory].filter(item=>item).length == 1;

    const truths = [
      {name: 'tactic', show: this.props.isTactic},
      {name: 'methodology', show: this.props.isMethodology},
      {name: 'principle', show: this.props.isPrinciple},
      {name: 'theory', show:this.props.isTheory}
    ];
    return (
      <FlagContainer lang={this.props.intl.locale} type={this.props.type} onMouseOver={this.handleMouseOver.bind(this)} onMouseOut={this.handleMouseOut.bind(this)}>
        <TypeFlagTooltip type={this.props.type} truths={truths} show={this.state.showTooltip} />
        <FlagViewport>
          <Flag show={this.props.isTactic} src={oneTruth ? BigTacticFlag : TacticFlag} />
          <Flag show={this.props.isMethodology} src={oneTruth ? BigMethodologyFlag : MethodologyFlag} />
          <Flag show={this.props.isPrinciple} src={oneTruth ? BigPrincipleFlag : PrincipleFlag} />
          <Flag show={this.props.isTheory} src={oneTruth ? BigTheoryFlag : TheoryFlag} />
        </FlagViewport>
      </FlagContainer>
    );
  }
}

TypeFlag.propTypes = {
  type: PropTypes.string.isRequired,
  isMethodology: PropTypes.bool,
  isPrinciple: PropTypes.bool,
  isTactic: PropTypes.bool,
  isTheory: PropTypes.bool
};

export default injectIntl(TypeFlag);
