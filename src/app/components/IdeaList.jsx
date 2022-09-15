
import Idea from "./Idea"

function IdeaList({ ideas, deleteIdea }) {
  return (
    <div class="p-2 is-flex is-justify-content-center">
      <div>
        { ideas.length === 0 && <p class="py-5">{ browser.i18n.getMessage("ideaListEmpty") }</p> }
        { ideas.map( (idea) => (
          <Idea key={idea.id} idea={idea} onDelete={deleteIdea} />
          )
        )}
      </div>
      </div>
  );
}

export default IdeaList;
