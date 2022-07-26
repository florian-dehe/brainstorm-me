import Brainstorm from './Brainstorm.js'

// Gets a brainstorming data based on the
// storingKey given.
async function getBrainstormData(storingKey) {

  const brainstorm = new Brainstorm(storingKey);

  const request_dict = {}
  request_dict[brainstorm.storingKey] = brainstorm.ideas;

  const value = await browser.storage.local.get(request_dict);

  if (value[brainstorm.storingKey]) {
    // If we have found something, pass the ideas.
    brainstorm.setIdeas(value[brainstorm.storingKey]);
  }

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
