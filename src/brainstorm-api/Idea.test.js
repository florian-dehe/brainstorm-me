import Idea from './Idea';

test("Construct a brainstorming idea", () => {

  const idea = new Idea("google.com", "My awesome text.");

  expect(idea.url).toEqual("google.com");
  expect(idea.text).toEqual("My awesome text.");

});

test("Export an idea to a dict", () => {

  const idea = new Idea("google.com", "My cool text.");

  expect(idea.to_dict()).toEqual({ url: "google.com", text: "My cool text." });
});
