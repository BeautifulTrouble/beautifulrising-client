import styled from 'styled-components';
export default styled.li`list-style: none;
  width: ${props=>props.theme.itemWidth};
  margin-right: ${props=>props.theme.itemMargin};
  display: inline-block;
  vertical-align: top;
  margin-bottom: 34px;

  @media(max-width: 1320px) {
  }
  @media(max-width: 970px) {
    width: 100%;
  }
`
;
