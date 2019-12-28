const CharacterHelper = {
  checkForDupes: characters => {
    const names = new Set();
    const hasDupes = characters.some(character => {
      return names.size === names.add(character.character).size;
    });

    return hasDupes;
  }
};

export default CharacterHelper;
