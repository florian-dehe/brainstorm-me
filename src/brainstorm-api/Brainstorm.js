import Idea from './Idea.js'

/*
 *  Represents a bank of idea, i.e. brainstorm
 */
class Brainstorm {
  constructor(storingKey="default") {
    this.storingKey = storingKey;
    this.ideas = [];
  }

  pushNewIdea(idea) {
    if (Object.keys(idea).length !== 0) {
      this.ideas.push(idea);
    }
  }

  setIdeas(ideas) {
    this.clearIdeas();
    for (const idea_dict in ideas) {
      const idea = new Idea(idea_dict.url, idea_dict.text);
      this.ideas.push(idea);
    }
  }

  clearIdeas() {
    this.ideas = [];
  }
}

export default Brainstorm;
