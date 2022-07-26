import { useState, useEffect } from 'preact/hooks'

import { getBrainstormData } from '../brainstorm-api/storage'

import Idea from './components/Idea'

function App() {

  const [ideas, setIdeas] = useState([]);

  // Fetch the current brainstorm ideas
  useEffect(() => {
    getBrainstormData().then(
      (brainstorm) => {
        setIdeas(brainstorm.ideas);
        console.log(brainstorm.ideas);
      }
    )
  }, []);

  return (
    <div>
      <h1>Brainstorm Me!</h1>
      <div>
        { ideas.map( (idea) => (
          <Idea key={idea.id} url={idea.url} text={idea.text} />
          )
        )}
      </div>
    </div>
  );
}

export default App;
