const animal1 = {
  id: 1,
  name: "delfi",
  ageYears: 2,
  weightInKg: 170,
  species: "Delfín Baiji",
  extinctionYear: 2007,
};

const animal2 = {
  id: 2,
  name: "scrat",
  ageYears: 3,
  weightInKg: 4,
  species: "ardilla dientes de sable",
  extinctionYear: -60000000,
};

const getSpecie = (animal) => animal.species;

const isExtinct = (animal) => animal.hasOwnProperty("extinctionYear");

const getAnimalInformation = (animal) =>
  `El animal ${animal.name} es un ${animal.species} de ${animal.ageYears} años de edad y pesa ${animal.weightInKg} kg.`;
