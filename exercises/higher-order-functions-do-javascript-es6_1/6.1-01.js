const peopleData = (name) => {
  const personData = {
    fullName: name,
    email: `${name.replace(/ /g, '_')}@trybe.com`,
  };
  return personData;
};

const newEmplyees = () => {
  const employees = {
    id1: peopleData('Pedro Guerra'),
    id2: peopleData('Luiza Drumond'),
    id3: peopleData('Carla Paiva'),
  };
  return employees;
};
console.log(newEmplyees())