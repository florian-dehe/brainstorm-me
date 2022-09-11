
function Idea({ idea, onDelete }) {
  return (
      <article class="message is-small my-1">
        <div class="message-header">
          <p>Idea</p>
          <button class="delete is-small" aria-label="delete" onClick={ () => onDelete(idea.id) } />
        </div>
        <div class="message-body p-2">
          <p>{ idea.text }</p>
          <a class="button is-link is-small mt-2" href={idea.url}>Go</a>
        </div>
      </article>
  );
}

export default Idea;
