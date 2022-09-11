import { useState, useEffect } from 'preact/hooks'

import { getBrainstormData, updateBrainstormData } from '../brainstorm-api/storage'

import Idea from './components/Idea'
import Header from './components/Header'

import Brainstorm from "../brainstorm-api/Brainstorm"

function App() {

  const [ideas, setIdeas] = useState([]);


  // Fetch the current brainstorm ideas
  useEffect(() => {
    getBrainstormData().then(
      (brainstorm) => {
        setIdeas(brainstorm.ideas);
      }
    )
  }, []);

  const deleteIdea = (id) => {
    console.log("Deleted idea " + id);

    const new_ideas = ideas.filter( (idea) => idea.id !== id);

    setIdeas(new_ideas);

    const brainstorm = new Brainstorm();
    brainstorm.setIdeas(new_ideas);

    updateBrainstormData( brainstorm ).then(
      (value) => console.log("sucessful")
    )
  }

  return (
    <div>
      <Header title='Brainstorm Me!' />
      <div class="p-2">
        { ideas.map( (idea) => (
          <Idea key={idea.id} idea={idea} onDelete={deleteIdea} />
          )
        )}
      </div>
    </div>
  );
}

export default App;
