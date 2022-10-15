import { useState } from "preact/hooks";

function Idea({ idea, onDelete }) {
  const [copied, setCopied] = useState(false);

  const copyToClipBoard = () => {

    navigator.clipboard.writeText(idea.text).then(
      () => {
        console.error("Successfully copied to clipboard");
        setCopied(true);
      },
      () => {
        console.error("Copy to clipboard failed");
      }
    );
  }

  return (
      <article class="notification is-small my-1">
          <button class="delete is-small" aria-label="delete" onClick={ () => onDelete(idea.id) } />
          <p>{ idea.text }</p>
          <div class="buttons mt-2">
            <a class="button is-link is-small" href={idea.url}>Go</a>
            { copied ? 
              <button class="button is-small is-success" onClick={copyToClipBoard}>
                <span class="icon">
                  <img src="icons/check.svg" alt="Copy to clipboard"/>
                </span>
              </button>
            : 
              <button class="button is-small is-link" onClick={copyToClipBoard}>
                <span class="icon">
                  <img src="icons/clipboard.svg" alt="Copy to clipboard"/>
                </span>
              </button>
            }
            
          </div>
      </article>
  );  
}

export default Idea;
