import styled from 'styled-components';
export default styled.div`
font-size: 24px;
padding: 0 20px;
padding-top: 20px;
position: relative;
h2 {
  text-transform: uppercase;
  border: 2px solid;
  border-width: 0 0 2px;
  font-size: 19px;
  letter-spacing: 0;
  font-family: 'Avenir', 'Kaff', sans-serif;
  font-weight: 800;
  margin-top: 40px;
  padding: 15px 20px;
  text-align: ${p=>p.lang==='ar'?'right':'left'};
  position: relative;
  margin-bottom: 80px;

  &::after {
    content: ' ';
    position: absolute;
    height: 80px;
    border-right: ${p=>p.hideHeader ? '0px solid' : '1px solid'};
    width: 1PX;
    bottom: -65px;
    ${p=>p.lang==='ar'?'right':'left'}: ${p=>{
      if (!p.position) return '50%';
      switch(p.position % 3) {
        case 0: return '50%';
        case 1: return '67%';
        case 2: return '83%';
      }
    }};
  }
}

`;
