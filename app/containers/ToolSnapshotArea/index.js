/**
*
* ToolSnapshotArea
*
*/

import React from 'react';
import styled from 'styled-components';

import ContentBlock from 'components/ContentBlock';
import LanguageThemeProvider from 'components/LanguageThemeProvider';

import TranslatableStaticText from 'containers/TranslatableStaticText';

import { FormattedMessage, injectIntl} from 'react-intl';
import messages from './messages';
import Markdown from 'react-remarkable';
import typeTranslate from 'containers/HomePage/messages';

import Viewport from 'components/ToolSnapshotArea/Viewport';
import Actions from 'components/ToolSnapshotArea/Actions';
import Act from 'components/ToolSnapshotArea/Act';
import SnapshotCallout from 'components/ToolSnapshotArea/SnapshotCallout';
import SnapshotLink from 'components/ToolSnapshotArea/SnapshotLink';
import staticText from './staticText';
function ToolSnapshotArea(props) {
  const { formatMessage, locale } = props.intl;
  const snapshotContent = !props.showIfUntranslated('snapshot')
                            ? null
                            : (<ContentBlock>
                                  <Markdown source={props.snapshot} />
                                </ContentBlock>);

  return (
    <div>
      <Viewport lang={locale}>
        { snapshotContent }
        <SnapshotCallout lang={locale}>
          <TranslatableStaticText {...staticText.callOut} values={{type: formatMessage(typeTranslate[props.type])}}/>
        </SnapshotCallout>
        <Actions>
          <Act>
            <SnapshotLink
              lang={props.intl.locale}
              href="https://docs.google.com/forms/d/e/1FAIpQLSeC_EdxoO7owVnL8fjSERZlychwMhDOR-7rI1SDtpL4ijZgkg/viewform" target="_blank">
              <TranslatableStaticText {...staticText.viewForm} />
            </SnapshotLink>
          </Act>
          <Act>
            <SnapshotLink
              lang={props.intl.locale}
              href={`http://beautifultrouble.org/${props.type}/${props.slug}/`} target="_blank">
              <TranslatableStaticText {...staticText.seeMore} values={{title: props.title}} />
            </SnapshotLink>
          </Act>
        </Actions>
      </Viewport>
    </div>
  );
}

ToolSnapshotArea.propTypes = {

};

export default injectIntl(ToolSnapshotArea);
