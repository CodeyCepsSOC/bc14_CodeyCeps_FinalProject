export default function NextEvent(props) {
  const backgroundStyling = {
    backgroundImage: `url(${props.img})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };
  return (
    <div className="next-event" style={backgroundStyling}>
      <h1>{props.title}</h1>
      <h2>{props.date}</h2>
      <button>Join now</button>
    </div>
  );
}
