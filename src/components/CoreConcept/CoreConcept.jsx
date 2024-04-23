export default function CoreConcept({ image, description, title, key }) {
  return (
    <li>
      {key}
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}
