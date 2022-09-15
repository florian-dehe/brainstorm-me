
function Idea({ idea, onDelete }) {
  return (
      <article class="notification is-small my-1">
          <button class="delete is-small" aria-label="delete" onClick={ () => onDelete(idea.id) } />
          <p>{ idea.text }</p>
          <a class="button is-link is-small mt-2" href={idea.url}>Go</a>
      </article>
  );
}

export default Idea;
