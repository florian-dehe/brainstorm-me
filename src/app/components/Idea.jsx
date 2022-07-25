
function Idea({ url, text }) {
  return (
    <div>
      <p>{text}</p>
      <a href={url}>{url}</a>
    </div>
  );
}
