const NUMBER_OF_DOGS = 15; //global constants can use snake case, local variables will use camel case

const state = {
  dogImageContainer: null,
  addDogButton: null,
  dogCountLabel: null,
  dogCount: 1,
};

const pickRandomNum = () => {
  return Math.floor(Math.random() * NUMBER_OF_DOGS) + 1;
};

const loadControls = () => {
  state.addDogButton = document.getElementById('add-dog-btn');
  state.dogImageContainer = document.getElementById('dog-img-container');
  state.dogCountLabel = document.getElementById('dog-count-label');
};

const randomDogImage = () => {
  const imgNumber = pickRandomNum();
  const newImgName = `../imgs/${imgNumber}.jpeg`;
  const newDog = document.createElement('img');
  newDog.src = newImgName;
  newDog.alt = 'A random doggo';
  ++state.dogCount;
  return newDog;
};

const addDogImgToTop = () => {
  const newDog = randomDogImage();
  state.dogImageContainer.prepend(newDog);
  state.dogCountLabel.textContent = state.dogCount;
};

const handleAddButtonClicked = (event) => {
  addDogImgToTop();
};

const registerEventHandlers = () => {
  loadControls();
  // setRandomDog();
  state.addDogButton.addEventListener('click', handleAddButtonClicked);
};

document.addEventListener('DOMContentLoaded', registerEventHandlers);

