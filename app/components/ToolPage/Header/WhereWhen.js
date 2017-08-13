import styled from 'styled-components';
import React from 'react';
import LanguageThemeProvider from 'components/LanguageThemeProvider';
import ContentBlock from 'components/ContentBlock';

const WhereWhenContainer = styled.div`
  font-weight: 800;
  color: white;
  text-transform: uppercase;
`;

function WhereWhen(props) {

  const where = props.where !== undefined ? props.where : '';
  const when = props.when !== undefined ? props.when : '';

  return (
    <WhereWhenContainer>
      <LanguageThemeProvider>
        <ContentBlock>
          {`${where} ${when}`}
        </ContentBlock>
      </LanguageThemeProvider>
    </WhereWhenContainer>
  )
}


WhereWhen.propTypes = {
  where: React.PropTypes.string.isRequired,
  when: React.PropTypes.string.isRequired,
};

export default WhereWhen;
