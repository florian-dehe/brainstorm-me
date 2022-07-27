import './Idea.css'

function Idea({ url, text }) {
  return (
    <div class="idea-box">
      <p>{text}</p>
      <a href={url}>{url}</a>
    </div>
  );
}

export default Idea;
