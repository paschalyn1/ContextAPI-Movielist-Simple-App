export default function Movie(props) {
  return (
    <div>
      <h1>Name: {props.name}</h1>
      <h3>Price: ${props.price}</h3>
      <p>Id: {props.id}</p>
    </div>
  );
}
