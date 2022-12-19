export default function Project({title, image, liveLink, repoLink}) {
  return (
    <div className="portfolio">
      <h1>{title}</h1>
      <img src={image} className="image" />
      <div className="projectLinks">
      <a href={liveLink}> Live Link</a>
      <br></br>
      <a href={repoLink}> Repo Link</a>
      </div>
    </div>
  );
}
