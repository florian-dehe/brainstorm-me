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
    expect(brainstorm.ideas.length).toEqual(1);

    let idea_dict = idea.to_dict();
    idea_dict["id"] = 0;
    expect(brainstorm.ideas).toContainEqual(idea_dict);

  });
});

test("Clear all ideas from brainstorm", () => {

  const brainstorm = new Brainstorm();

  const idea = new Idea("google.com", "cool text.");

  expect(brainstorm.ideas).toEqual([]);
  brainstorm.pushNewIdea(idea);
  expect(brainstorm.ideas.length).toEqual(1);

  brainstorm.clearIdeas();
  expect(brainstorm.ideas).toEqual([]);

});

describe("Set a list of ideas", () => {

  test("Empty list", () => {
    const brainstorm = new Brainstorm();

    expect(brainstorm.ideas).toEqual([]);
    brainstorm.setIdeas([]);
    expect(brainstorm.ideas).toEqual([]);
  });

  test("Idea list", () => {
    const brainstorm = new Brainstorm();

    const idea = new Idea('test.fr', 'nice text');

    expect(brainstorm.ideas).toEqual([]);
    brainstorm.setIdeas([idea]);

    let idea_dict = idea.to_dict();
    idea_dict['id'] = 0;
    expect(brainstorm.ideas).toContainEqual(idea_dict);
  });

});
