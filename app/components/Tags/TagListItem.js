import styled from 'styled-components';
export default styled.li`
  display: inline;
  vertical-align: middle;
  &:last-child {
    span { display: none; }
  }
  font-family: Avenir, Kaff;
  font-weight: ${p=>p.selected ? 800 : 400 };

  * { vertical-align: middle; }
  span {
    font-weight: 800; font-family: 'Avenir', 'Kaff';
  }

  a {
    text-decoration: ${props=>props.selected ? 'normal' : 'underline'};
    color: ${props=>props.selected ? 'black' : '#828486'};
  }
`;
