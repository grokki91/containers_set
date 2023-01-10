export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(character) {
    if (character in this.members) {
      new Error('Такой персонаж уже есть');
    }
    return this.members.add(character);
  }

  addAll(...characters) {
    return characters.forEach((character) => this.members.add(character));
  }

  toArray() {
    return [...this.members];
  }
}
