/**
*
* ToolKeyItems
*
*/

import React, {PropTypes} from 'react';
import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import { getToolTypeColor } from 'components/CommonComponents';
import messages from './messages';
import Markdown from 'react-remarkable';

const Container = styled.section``;
const Viewport = styled.div``;

const KeyItemList = styled.div``;
const KeyItemListItem = styled.div`
  margin: 20px 0;
`;
const Header = styled.h3`
text-align: left;
margin: 0;
padding: 0;`;
const TypeSubheader = styled.h4`
  text-align: left;
  color: ${props=>getToolTypeColor(props.type)};
  margin: 0;
  padding: 0;
`;
const Content = styled.div`
  text-align: left;
`;



class ToolKeyItems extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  generateKeyItems(list, type) {
    if (!list || list.length == 0) return null;

    return (
      <KeyItemList>
        { list.map((item,ind)=> {
            const [full, header, content] = item.match(/^(.*?) - (.*)$/i, item)
            return (<KeyItemListItem key={ind} >
                      <TypeSubheader type={type}>
                        <FormattedMessage {...messages[type]} />
                      </TypeSubheader>
                      <Header>{header}</Header>
                      <Content>
                        <Markdown source={content} />
                      </Content>
                    </KeyItemListItem>)
        }) }
      </KeyItemList>
    )

  }


  render() {
    return (
      <Container>
        <Viewport>
          {this.generateKeyItems(this.props.keyTactics, "tactic")}
          {this.generateKeyItems(this.props.keyPrinciples, "principle")}
          {this.generateKeyItems(this.props.keyTheories, "theory")}
          {this.generateKeyItems(this.props.keyMethodologies, "methodology")}
        </Viewport>
      </Container>
    );
  }
}

ToolKeyItems.propTypes = {
  keyMethodologies: PropTypes.array,
  keyTactics: PropTypes.array,
  keyPrinciples: PropTypes.array,
  keyTheories: PropTypes.array,
};

export default ToolKeyItems;
