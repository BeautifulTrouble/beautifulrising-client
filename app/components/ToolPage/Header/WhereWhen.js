import styled from 'styled-components';
import React from 'react';
import LanguageThemeProvider from 'components/LanguageThemeProvider';
import ContentBlock from 'components/ContentBlock';

const WhereWhenContainer = styled.div`
  font-weight: 800;
  color: white;
  text-transform: uppercase;
`;

const WhereWhenContent = styled(ContentBlock)`
  font-size: 8px;
  line-height: 8px;
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
