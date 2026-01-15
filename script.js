function dropPetals(flower) {
  const petals = flower.querySelectorAll('.petal');
  petals.forEach((petal, i) => {
    setTimeout(() => {
      petal.classList.add('fall');
    }, i * 150);
  });
}
