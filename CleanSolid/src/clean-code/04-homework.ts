(() => {
  function isRedFruit(fruit: string): boolean {
    return ['manzana', 'cereza', 'ciruela'].includes(fruit);
  }

  function getFruitsByColor(color: string): string[] {
    const fruitsByColor = {
      red: ['manzana', 'fresa'],
      yellow: ['piña', 'banana'],
      purple: ['moras', 'uvas'],
    };

    const fruits = fruitsByColor[color as 'red' | 'yellow' | 'purple'];
    if (!fruits) {
      throw new Error(
        `the color must be: red, yellow, purple. You provided: ${color}.`
      );
    }

    return fruits;
  }

  let isFirstStepWorking = true;
  let isSecondStepWorking = true;
  let isThirdStepWorking = true;
  let isFourthStepWorking = true;

  function workingSteps(): string {
    const steps = [
      isFirstStepWorking,
      isSecondStepWorking,
      isThirdStepWorking,
      isFourthStepWorking,
    ];
    const stepDescriptions = [
      'First step',
      'Second step',
      'Third step',
      'Fourth step',
    ];

    for (let i = 0; i < steps.length; i++) {
      if (!steps[i]) {
        return `${stepDescriptions[i]} broken.`;
      }
    }

    return 'Working properly!';
  }

  // isRedFruit
  console.log({ isRedFruit: isRedFruit('cereza'), fruit: 'cereza' }); // true
  console.log({ isRedFruit: isRedFruit('piña'), fruit: 'piña' }); // true

  //getFruitsByColor
  console.log({ redFruits: getFruitsByColor('red') }); // ['manzana', 'fresa']
  console.log({ yellowFruits: getFruitsByColor('yellow') }); // ['piña', 'banana']
  console.log({ purpleFruits: getFruitsByColor('purple') }); // ['moras', 'uvas']
  // console.log({ pinkFruits: getFruitsByColor('pink') }); // Error: the color must be: red, yellow, purple

  // workingSteps
  console.log({ workingSteps: workingSteps() }); // Cambiar los valores de la línea 31 y esperar los resultados
})();
