import { render, screen, fireEvent } from '@testing-library/react';
import Board from './Board';

test('renders a new board with 3 x 3 grid', () => {
  render(<Board ncols={3} nrows={3} chanceLightStartsOn={3.2} />);
  const tableElement = screen.getByRole('table');
  expect(tableElement).toBeInTheDocument();

  //   const linkElement = screen.getByText(/learn react/i);
  //   expect(linkElement).toBeInTheDocument();
});
//  CLick a cell to turn it on
it('handles button clicks', function () {
  render(<Board ncols={1} nrows={1} chanceLightStartsOn={0} />);

  // click on the cell
  const newCell = screen.getByRole('cell');
  fireEvent.click(newCell);
  expect(newCell).toHaveClass('Cell-lit');
});
//  CLick a cell to turn it off and win the game!
it('handles button clicks', function () {
  render(<Board ncols={1} nrows={1} chanceLightStartsOn={1} />);

  // click on the cell
  const newTable = screen.getByRole('table');
  if (newTable) {
    const newCell = screen.getByRole('cell');
    // fireEvent.click(newCell);
    // expect(newCell).toHaveClass('Cell-lit');
  }

  //   const noCell = screen.getByText('YOU ARE A WINNER!!');
  //   // fireEvent.click(newCell);
  //   expect(noCell).toHaveTextContent('YOU ARE A WINNER!!');
});
