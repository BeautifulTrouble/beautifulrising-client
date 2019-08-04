import styled from 'styled-components';

export default styled.div`
  position: relative;
  text-align: ${p=>p.theme.isArabic?'left':'right'};

  @media(max-width: 1320px) {
  }
  @media(max-width: 970px) {
    text-align: ${p=>p.theme.isArabic?'right':'left'};
  }
`;
