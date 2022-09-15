
function Toolbar({ clearIdeas }) {
  return (
    <div class="field has-addons">
      <p class="control is-expanded">
        <button class="button is-fullwidth" onClick={clearIdeas}>
          <span>Clear ideas</span>
        </button>
      </p>
      <p class="control is-expanded">
        <button class="button is-fullwidth" disabled>
          <span>Export</span>
        </button>
      </p>
    </div>
  );
}

export default Toolbar;
