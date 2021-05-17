import React from 'react';
import { render, fireEvent, prettyDOM } from '@testing-library/react';
import Game from '../Game';

describe('tests for the Game component', () => {

  test('clicking on the robot head toggles the cheating state', () => {
    const { getByTestId, debug } = render(<Game />);
    // console.log(prettyDOM(container));
    // debug();
    // getByTestId(container, 'mecha-icon')

    const mechaIcon = getByTestId('mecha-icon');
    
    // click on the icon
    fireEvent.click(mechaIcon);
    
    expect(mechaIcon).toHaveClass('cheating');
    
    fireEvent.click(mechaIcon);

    expect(mechaIcon).not.toHaveClass('cheating');
  });

});
