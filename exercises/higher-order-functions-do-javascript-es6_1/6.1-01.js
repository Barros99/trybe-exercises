const peopleData = (fullName) => ({ fullName: fullName, email: `${fullName.replace(/ /g, '_')}@trybe.com`});

const newEmplyees = (callback) => {
  const employees = {
    id1: callback('Pedro Guerra'),
    id2: callback('Luiza Drumond'),
    id3: callback('Carla Paiva'),
  };
  return employees;
};
console.log(newEmplyees(peopleData));

