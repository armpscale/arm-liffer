import { cardAt } from './components/RandomCard/cards'

it('Card name = 2C, Number = 0', () => {
    expect(cardAt(0)).toBe("2C");
});

it('Card name = 3C, Number = 1', () => {
    expect(cardAt(1)).toBe("3C");
});

it('Card name = 0H, Number = 34', () => {
    expect(cardAt(34)).toBe("0H");
});

it('Card name = JH, Number = 35', () => {
    expect(cardAt(35)).toBe("JH");
});

it('Card name = AS, Number = 51', () => {
    expect(cardAt(51)).toBe("AS");
});

it('Card name = Error, Number = -1', () => {
    expect(cardAt(-1)).toBe("Number cannot < 0 or > 51");
});

it('Card name = Error, Number = 52', () => {
    expect(cardAt(52)).toBe("Number cannot < 0 or > 51");
});