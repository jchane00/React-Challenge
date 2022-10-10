export default function Project({title, image, liveLink, repoLink}) {
  return (
    <div>
      <h1>{title}</h1>
      <img src={image} />
      <a href={liveLink}> Live Link</a>
      <a href={repoLink}> Repo Link</a>
    </div>
  );
}
