import styled from 'styled-components';
import React from 'react';
import LanguageThemeProvider from 'components/LanguageThemeProvider';
import ContentBlock from 'components/ContentBlock';

const WhereWhenContainer = styled(ContentBlock)`
  font-weight: 800;
  color: white;
  @media(max-width: 1320px) {
    font-size: 8px;
    line-height: 8px;
  }
`;

const WhereContent = styled.span`
  text-transform: uppercase;
`;

function WhereWhen(props) {
  const where = props.where !== undefined ? props.where : '';
  const when = props.when !== undefined ? props.when : '';

  return (
    <LanguageThemeProvider>
      <WhereWhenContainer>
        <WhereContent>{where}</WhereContent> {when}
      </WhereWhenContainer>
    </LanguageThemeProvider>
  );
}


WhereWhen.propTypes = {
  where: React.PropTypes.string,
  when: React.PropTypes.string,
};

export default WhereWhen;
