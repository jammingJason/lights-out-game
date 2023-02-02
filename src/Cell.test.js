import React from 'react';

import {
  render,
  fireEvent,
  getAllByRole,
  getByRole,
} from '@testing-library/react';
import Cell from './Cell';
test('renders a cell', () => {
  render(
    <Cell
      flipCellsAroundMe={() => console.log('THIS IS IN THE TEST')}
      isLit={true}
    />
  );
  //   const linkElement = screen.getByText(/learn react/i);
  //   expect(linkElement).toBeInTheDocument();
});

// snapshot test
it('matches snapshot', function () {
  const { aCell } = render(
    <Cell
      flipCellsAroundMe={() => console.log('THIS IS IN THE TEST')}
      isLit={true}
    />
  );
  expect(aCell).toMatchSnapshot();
});
