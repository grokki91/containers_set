import Team from '../app/Team';

describe('Check class Team', () => {
  const team = new Team();
  const wizard = { type: 'wizard' };
  const demon = { type: 'demon' };
  const skelet = { type: 'skelet' };
  test('Check method add', () => {
    const expectedHero = { type: 'wizard' };
    expect(team.add(wizard)).toEqual(expectedHero);
  });
  test('Check method addAll', () => {
    // eslint-disable-next-line no-dupe-keys
    const expectedHero = { type: 'wizard', type: 'demon', type: 'skelet' };
    expect(team.addAll(wizard, demon, skelet)).toEqual(expectedHero);
  });
  test('Check method toArray', () => {
    const expectedHero = [{ type: 'wizard' }, { type: 'demon' }, { type: 'skelet' }];
    expect(team.toArray()).toEqual(expectedHero);
  });
});
