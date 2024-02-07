import Styled from 'styled-components';

// const UserBar = Styled.div`
//     width:${(props:any)=>props.percent}%
// `;

// export const BarPercent = Styled(UserBar).attrs({ 
//    percent: 42, // Providing required prop foo, which makes it optional 
//  })``;

export const UserBar = Styled.div.attrs<{ percent:number|null }>({})`
  width:${(props:any)=>props.percent}%;
`;