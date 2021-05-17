import { announceResult, chooseMechaAttack } from '../helpers'

describe('announceResult function', () => {
  let fakeState;

  beforeEach(() => {
    fakeState = {
      compSelection: null,
      playerSelection: null,
      status: 'Waiting',
      cheating: false
    };
  });
  
  test('returns "Won" if player is "Axe" and comp is "Tree"', () => {
    fakeState.playerSelection = 'Axe';
    fakeState.compSelection = 'Tree';
    expect(announceResult(fakeState.playerSelection, fakeState.compSelection)).toBe('Won');
  });

  test('returns "Tied" if player is "Axe" and comp is "Axe"', () => {
    fakeState.playerSelection = 'Axe';
    fakeState.compSelection = 'Axe';
    expect(announceResult(fakeState.playerSelection, fakeState.compSelection)).toBe('Tied');
  });

  test('returns "Lost" if player is "Axe" and comp is "Moai"', () => {
    fakeState.playerSelection = 'Axe';
    fakeState.compSelection = 'Moai';
    expect(announceResult(fakeState.playerSelection, fakeState.compSelection)).toBe('Lost');
  });

  test('returns "Waiting" if nothing is passed in', () => {
    expect(announceResult()).toBe('Waiting');
  });
});

describe('chooseMechaAttack function', () => {

  test('when not "cheating", returns a random item', () => {
    const playerChoice = 'Moai';
    const cheating = false;

    const actual = chooseMechaAttack(playerChoice, cheating);
    const expectedChoices = ['Moai', 'Axe', 'Tree'];

    expect(expectedChoices).toContain(actual);
    // expect(expectedChoices.includes(actual)).toBe(true);
  });

  test('when "cheating", returns the winning item', () => {
    const cheating = true;

    let playerChoice = 'Moai';
    let expected = 'Tree';

    let actual = chooseMechaAttack(playerChoice, cheating);
    expect(actual).toBe(expected);
    
    playerChoice = 'Tree';
    expected = 'Axe';
    
    actual = chooseMechaAttack(playerChoice, cheating); 
    expect(actual).toBe(expected);
  });

});
