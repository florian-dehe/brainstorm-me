import Brainstorm from './Brainstorm'
import Idea from './Idea'
import { updateBrainstormData } from './storage'

describe("Update brainstorm data on local storage", () => {

  test('using a default empty brainstorm', async () => {
    const brainstorm = new Brainstorm();

    const value = await updateBrainstormData(brainstorm);
    expect(browser.storage.local.set).toHaveBeenCalled();
    expect(value).toBeUndefined();
  });

  test('using a brainstorm containing ideas', async () => {
    const brainstorm = new Brainstorm();

    const idea = new Idea('google.com', 'cool text.');
    brainstorm.pushNewIdea(idea);

    const value = await updateBrainstormData(brainstorm);
    expect(browser.storage.local.set).toHaveBeenCalled();
    expect(value).toBeUndefined();
  });
});
