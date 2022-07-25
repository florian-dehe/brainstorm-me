/*
 * Represents a brainstorming idea that can be stored
 * in the system.
 */
class Idea {
  constructor(url, text) {
    this.url = url,
    this.text = text
  }

  to_dict() {
    return { url: this.url, text: this.text }
  }
}

export default Idea;
