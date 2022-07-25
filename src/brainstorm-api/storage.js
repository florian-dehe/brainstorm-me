import Brainstorm from './Brainstorm.js'

// Gets a brainstorming data based on the
// storingKey given.
async function getBrainstormData(storingKey) {
  const value = await browser.storage.local.get(storingKey);

  const brainstorm = new Brainstorm(storingKey);
  brainstorm.setIdeas(value);

  return brainstorm;
}

// Updates a brainstorm data using the storage API.
// It uses the storingKey in the Brainstorm object.
async function updateBrainstormData(brainstorm) {
  let dataToStore = {};
  dataToStore[brainstorm.storingKey] = brainstorm.ideas;

  const value = await browser.storage.local.set(dataToStore);

  return value;
}

export { getBrainstormData, updateBrainstormData }
