function getObjectKeys(object) {
  const names = {};
  object.forEach((object) => (names[object.name] = ""));

  return names;
}

export default getObjectKeys;
