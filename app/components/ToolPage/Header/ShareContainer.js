import styled from 'styled-components';

export default styled.div`
  display: block;
  margin-top: 11px;
  svg * {
    fill: white;
  }
  span.share-button {
    margin-right: 10px;
  }
  color: white;
  font-weight: 800;

  @media(max-width: 1320px) {
  }
  @media(max-width: 970px) {
    display: inline-block;
    margin-top: 0;
    margin-${p=>p.theme.isArabic?'right':'left'}: 5px;
  }
`;
