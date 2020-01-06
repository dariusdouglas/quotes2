const CharacterHelper = {
  checkForDupes: characters => {
    let hasDupes = false;
    const names = new Set();
    if (characters.length > 0) {
      hasDupes = characters.some(character => {
        return names.size === names.add(character.character).size;
      });
    }

    return hasDupes;
  }
};

export default CharacterHelper;
