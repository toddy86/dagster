import * as React from 'react';
import styled from 'styled-components/macro';

import {LeftNav} from '../nav/LeftNav';

import {LayoutContext} from './LayoutProvider';

export const App: React.FC = (props) => {
  const {nav} = React.useContext(LayoutContext);

  const onClickMain = React.useCallback(() => {
    nav.close();
  }, [nav]);

  return (
    <Container>
      <LeftNav />
      <Main $navOpen={nav.isOpen} onClick={onClickMain}>
        {props.children}
      </Main>
    </Container>
  );
};

const Main = styled.div<{$navOpen: boolean}>`
  height: 100%;
  margin-left: 280px;
  width: calc(100% - 280px);

  @media (max-width: 1440px) {
    margin-left: 0;
    width: 100%;
  }
`;

const Container = styled.div`
  display: flex;
  height: calc(100% - 48px);
`;
