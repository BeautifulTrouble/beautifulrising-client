import React from 'react';
import { Link } from 'react-router';
import { gaEvent, gaTrackedLinks } from 'utils/analytics';

export function RouterLink(props) {
  if (gaTrackedLinks.hasOwnProperty(props.href)) {
      return <a href={props.href} target={'_blank'} onClick={()=>gaEvent('click', gaTrackedLinks[props.href])}>{props.children}</a>;
  }
  return (
    props.href.match(/^(https?:)?\/\//)
      ? <a href={props.href} target={'_blank'}>{props.children}</a>
      : <Link to={props.href}>{props.children}</Link>

  );
}

