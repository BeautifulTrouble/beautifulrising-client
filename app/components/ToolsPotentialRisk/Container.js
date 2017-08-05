import styled from 'styled-components';
import SidebarContent from 'components/ToolPage/Sidebar/SidebarContent';

export default styled(SidebarContent)`
  text-align: ${props=>props.theme.lang === 'ar' ? 'right' : 'left'};
`;
