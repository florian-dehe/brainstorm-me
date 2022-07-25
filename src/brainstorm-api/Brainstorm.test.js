import Brainstorm from './Brainstorm';
import Idea from './Idea'

describe("Construct a brainstorming object", () => {

  test("with default parameters", () => {
    const brainstorm = new Brainstorm();

    expect(brainstorm.storingKey).toEqual('default');
    expect(brainstorm.ideas).toEqual([]);
  });

  test("by giving a storing key", () => {
    const brainstorm = new Brainstorm('test');

    expect(brainstorm.storingKey).toEqual('test');
    expect(brainstorm.ideas).toEqual([]);
  });
});

describe("Push a new idea to a brainstorm", () => {

  test("if the idea is not empty", () => {

    const brainstorm = new Brainstorm();

    expect(brainstorm.ideas).toEqual([]);
    brainstorm.pushNewIdea({});
    expect(brainstorm.ideas).toEqual([]);

  });

  test("a simple idea", () => {

    const brainstorm = new Brainstorm();

    const idea = new Idea("google.com", "Awesome text.");

    expect(brainstorm.ideas).toEqual([]);
    brainstorm.pushNewIdea(idea);
    expect(brainstorm.ideas).toContain(idea);

  });
});

test("Clear all ideas from brainstorm", () => {

  const brainstorm = new Brainstorm();

  const idea = new Idea("google.com", "cool text.");

  expect(brainstorm.ideas).toEqual([]);
  brainstorm.pushNewIdea(idea);
  expect(brainstorm.ideas).toContain(idea);

  brainstorm.clearIdeas();
  expect(brainstorm.ideas).toEqual([]);

});
