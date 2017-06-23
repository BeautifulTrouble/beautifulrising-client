/**
*
* ToolSnapshotArea
*
*/

import React from 'react';
import styled from 'styled-components';

import { FormattedMessage, injectIntl} from 'react-intl';
import messages from './messages';
import Markdown from 'react-remarkable';
import typeTranslate from 'containers/HomePage/messages';

const Container = styled.div``;
const Viewport = styled.div`
  text-align: left;
`;
const SnapshotContent = styled.div``;
const Actions = styled.ul`
  padding: 0;
  margin: 0;

  &::after {
    content: ' ';
    display: block;
    clear: both;
  }
`;
const Act = styled.li`list-style: none;
  color: #838486;
  width: 45%;
  display: inline-block;
  &:first-child {
    float: left;
  }
  &:last-child {
    float: right;
  }
`;

const SnapshotCallout = styled.div`
  font-weight: bold;
  color: black;
  margin-bottom: 5px;
`;
const Link = styled.a`
    color: #838486;
    font-size: 18px;
    text-transform: uppercase;
    font-weight: bold;
    ${props=>props.lang === 'ar' ? 'text-align: right;' : ''}


`;

function ToolSnapshotArea(props) {
  const { formatMessage } = props.intl;
  return (
    <Container>
      <Viewport>
        <SnapshotContent>
          <Markdown source={props.snapshot} />
        </SnapshotContent>
        <SnapshotCallout>
          <FormattedMessage {...messages.callOut} values={{type: formatMessage(typeTranslate[props.type])}}/>
        </SnapshotCallout>
        <Actions>
          <Act>
            <Link
              lang={props.intl.locale}
              href="https://docs.google.com/forms/d/e/1FAIpQLSeC_EdxoO7owVnL8fjSERZlychwMhDOR-7rI1SDtpL4ijZgkg/viewform" target="_blank">
              <FormattedMessage {...messages.viewForm} />
            </Link>
          </Act>
          <Act>
            <Link
              lang={props.intl.locale}
              href={`http://beautifultrouble.org/${props.type}/${props.slug}/`} target="_blank">
              <FormattedMessage {...messages.seeMore} values={{name: props.title}} />
            </Link>
          </Act>
        </Actions>
      </Viewport>
    </Container>
  );
}

ToolSnapshotArea.propTypes = {

};

export default injectIntl(ToolSnapshotArea);
