import { useState } from 'preact/hooks'

function App() {

  const [ideas, setIdeas] = useState([]);

  return (
    <div>
      <h1>Brainstorm Me!</h1>
    </div>
  );
}

export default App;
