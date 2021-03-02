const people = [
    { name: 'Владилен', age: 25, budget: 40000 },
    { name: 'Елена', age: 17, budget: 3400 },
    { name: 'Игорь', age: 49, budget: 50000 },
    { name: 'Михаил', age: 15, budget: 1800 },
    { name: 'Василиса', age: 24, budget: 25000 },
    { name: 'Виктория', age: 38, budget: 2300 },
  ];


  for (let i = 0; i < people.length; i++) {
      console.log(people[i]);
  }

  for (let person of people) {
      console.log(person);
  }
  
  
  // forEach -- не создает новый массив
  people.forEach((i) => console.log(i));

  // Map -- создает новый массив
  const newPeople = people.map(i => { 
    //   return person.name;
      return i;
  })
  
  // Filter

  const adults = people.filter(person => {
      if(person.age >= 18) {
          return true;
      }
  });

  const adults2 = people.filter(person => person.age >= 18);
  
  // Reduce - служит для получения финального значения 
  const result = people.reduce((total, person) => {
    return total + person.budget;
  }, 0)
  
  // Find
  const find = people.find(person => person.name === "IGOR");
  
  // FindIndex
  const findIndex = people.findIndex(person => person.name === "IGOR");

//   Совместное использование
// Filter возвращает новый массив

const newPeople = people
    .filter(person => person.budget > 3000)
    .map(person => {
        return {
            info: `${person.name} (${person.age})`,
            budget: person.budget
        }
    }).reduce((total, person) => total + person.budget, 0)