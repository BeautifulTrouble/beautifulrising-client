import styled from 'styled-components';
import React from 'react';
import LanguageThemeProvider from 'components/LanguageThemeProvider';
import ContentBlock from 'components/ContentBlock';

const WhereWhenContainer = styled.div`
  font-weight: 800;
  color: white;
  // It's complicated to get all the capitalization right for every date format
  // in every language, so let's not do this. Example dates: 1980s, 1995-present
  //text-transform: uppercase;
`;

const WhereWhenContent = styled(ContentBlock)`

  text-align: ${props => props.theme.lang == 'ar' ? 'left' : 'right'};
  @media(max-width: 1320px) {
  }
  @media(max-width: 970px) {
    font-size: 8px;
    line-height: 8px;
  }
`;

function WhereWhen(props) {

  const where = props.where !== undefined ? props.where : '';
  const when = props.when !== undefined ? props.when : '';

  return (
    <WhereWhenContainer>
      <LanguageThemeProvider>
        <WhereWhenContent>
          {`${where} ${when}`}
        </WhereWhenContent>
      </LanguageThemeProvider>
    </WhereWhenContainer>
  )
}


WhereWhen.propTypes = {
  where: React.PropTypes.string,
  when: React.PropTypes.string,
};

export default WhereWhen;
