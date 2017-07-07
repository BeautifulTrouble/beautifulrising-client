import React from 'react';
import { Link } from 'react-router';

export function RouterLink(props) {
  return (
    props.href.match(/^(https?:)?\/\//)
      ? <a href={props.href} target={'_blank'}>{props.children}</a>
      : <Link to={props.href}>{props.children}</Link>
  );
}
