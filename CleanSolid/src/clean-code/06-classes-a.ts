(() => {
  type Gender = 'M' | 'F';

  class Person {
    constructor(
      public name: string,
      public gender: Gender,
      public birthdate: Date
    ) {}
  }

  const newPerson = new Person('Max', 'M', new Date('1995-06-12'));
  console.log({ newPerson });
})();
