import React from 'react';

import { render, screen, fireEvent } from '@src/test-utils';

import { MemoryRouter } from 'react-router-dom';

import App from './App';

const renderApp = ({ path }: { path: string }) => render(
  <MemoryRouter initialEntries={[path]}>
    <App />
  </MemoryRouter>,

);

describe('<App>', () => {
  context('/ 경로로 이동시', () => {
    beforeEach(() => {
      renderApp({ path: '/' });
    });

    it('렌더링 되었을 때 default text는 light 여야 한다.', () => {
      expect(screen.getByText('light')).toBeInTheDocument();
    });

    it('toggle 버튼을 클릭하면 text는 dark 와 light 로 번갈아 변경되어야 한다.', () => {
      fireEvent.click(screen.getByRole('button', { name: 'light' }));
      expect(screen.getByText('dark')).toBeInTheDocument();

      fireEvent.click(screen.getByRole('button', { name: 'dark' }));
      expect(screen.getByText('light')).toBeInTheDocument();
    });
  });
});
