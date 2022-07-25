import Brainstorm from './Brainstorm'
import Idea from './Idea'
import { updateBrainstormData, getBrainstormData } from './storage'

describe("Update brainstorm data on local storage", () => {

  beforeEach(() => {
    browser.storage.local.get.mockClear();
    browser.storage.local.set.mockClear();
  });

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

describe("Get brainstorm data on local storage", () => {

  beforeEach(() => {
    browser.storage.local.get.mockClear();
    browser.storage.local.set.mockClear();
  });

  test('from a default empty brainstorm', async () => {
    const value = await getBrainstormData('test');
    expect(browser.storage.local.get).toHaveBeenCalled();
    expect(value).toEqual(new Brainstorm('test'));
  });

  test('from a brainstorm containing ideas', async () => {
    const brainstorm = new Brainstorm('test');

    const idea = new Idea('google.com', 'cool text.');
    brainstorm.pushNewIdea(idea);

    await updateBrainstormData(brainstorm);

    const value = await getBrainstormData('test');
    expect(browser.storage.local.get).toHaveBeenCalled();
    expect(value).toEqual(brainstorm);
  });
});
