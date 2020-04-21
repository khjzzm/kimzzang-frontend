import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const PayWrapper = styled.div`
  padding: 0;
  @media (max-width: 1400px) {
    padding: 0;
  }
  @media (max-width: 990px) {
    padding: 0;
  }
  @media (max-width: 575px) {
    padding: 0;
  }
`;

export const PayshowcaseRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -5px;
`;

export const PayshowcaseCol = styled.div`
  flex: 0 0 20%;
  padding: 10px;
  @media (max-width: 767px) {
    //flex: 0 0 33.3333333%;
    //max-width: 33.3333333%;
    &:nth-child(n + 4) {
      display: none;
    }
  }
`;

export default PayWrapper;
