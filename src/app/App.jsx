import { useState } from 'preact/hooks'

function App() {

  const [ideas, setIdeas] = useState([]);

  return (
    <div>
      <h1>Preact ! Ninja</h1>
    </div>
  );
}

export default App;
