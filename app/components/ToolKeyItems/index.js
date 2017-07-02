/**
*
* ToolKeyItems
*
*/

import React, {PropTypes} from 'react';
import styled, { ThemeProvider } from 'styled-components';

import ContentBlock from 'components/ContentBlock';
import LanguageThemeProvider from 'components/LanguageThemeProvider';
import { FormattedMessage, injectIntl } from 'react-intl';
import { getToolTypeColor } from 'components/CommonComponents';
import messages from './messages';
import Markdown from 'react-remarkable';


const Container = styled.section``;
const Viewport = styled.div``;

const KeyItemList = styled.div`
margin-top: 36px;
`;
const KeyItemListItem = styled.div`
  margin: 10px 0;
`;
const Header = styled.h3`
text-align: ${props=>props.theme.lang==='ar' ? 'right' : 'left'};
line-height: 30px;
margin: 0;
padding: 0;
`;
const TypeSubheader = styled.h4`
  font-family: 'Paint Hand', 'Massira Spray';
  letter-spacing: ${p=>p.theme.isArabic?'3px':'0'};
  font-size: ${p=>p.theme.isArabic?'28px':'20px'};
  line-height: ${p=>p.theme.isArabic?'40px':'22px'};
  text-align: ${p=> p.theme.isArabic? 'right' : 'left'} ;
  color: ${props=>getToolTypeColor(props.type)};
  margin: 0;
  padding: 0;
`;
const Content = styled(ContentBlock)``;



class ToolKeyItems extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  generateKeyItems(list, type) {
    if (!list || list === undefined || list.length == 0) return null;
    const { locale } = this.props.intl;
    return (
      <KeyItemList>
        { list.map((item,ind)=> {
            try {
              const [header, content] = item;
              return (<KeyItemListItem key={ind} >
                        {ind>0?null:<TypeSubheader type={type}>
                          <FormattedMessage {...messages[type]} />
                        </TypeSubheader>}
                        <Header>{header}</Header>
                        <Content>
                          <Markdown source={content} />
                        </Content>
                      </KeyItemListItem>)
            } catch (e) {
              return null;
            }

        }) }
      </KeyItemList>
    )

  }


  render() {
    
    return (
      <LanguageThemeProvider>
        <Container>
          <Viewport>
            {this.generateKeyItems(this.props.keyTactics, "tactic")}
            {this.generateKeyItems(this.props.keyPrinciples, "principle")}
            {this.generateKeyItems(this.props.keyTheories, "theory")}
            {this.generateKeyItems(this.props.keyMethodologies, "methodology")}
          </Viewport>
        </Container>
      </LanguageThemeProvider>
    );
  }
}

ToolKeyItems.propTypes = {
  keyMethodologies: PropTypes.array,
  keyTactics: PropTypes.array,
  keyPrinciples: PropTypes.array,
  keyTheories: PropTypes.array,
};

export default injectIntl(ToolKeyItems);
