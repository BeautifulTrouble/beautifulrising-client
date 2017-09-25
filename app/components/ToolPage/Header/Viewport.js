import styled from 'styled-components';
export default styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  background-color: rgba(0,0,0,0.5);
  text-align: ${props=>props.theme.lang === 'ar' ? 'right' : 'left'};
  padding-${props=>props.theme.lang==='ar'?'right':'left'}: 90px;
  overflow: ${props=>props.showOverflow?'visible':'hidden'};

  @media(max-width: 1320px) {
    padding-${props=>props.theme.lang==='ar'?'right':'left'}: 42px;
  }
`;
