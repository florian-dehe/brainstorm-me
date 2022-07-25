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

      let ideaToStore = idea.to_dict();
      ideaToStore['id'] = this.ideas.length;

      this.ideas.push(ideaToStore);
    }
  }

  setIdeas(ideas) {
    this.clearIdeas();
    for (let i = 0; i < ideas.length; i++) {
      const idea_dict = ideas[i];
      const idea = new Idea(idea_dict.url, idea_dict.text);
      this.pushNewIdea(idea);
    }
  }

  clearIdeas() {
    this.ideas = [];
  }
}

export default Brainstorm;
