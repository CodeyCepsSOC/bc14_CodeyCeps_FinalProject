import "./NextEvent.css";

export default function NextEvent(props) {
  const backgroundStyling = {
    backgroundImage: `url(${props.img})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };
  return (
    <div className="next-event" style={backgroundStyling}>
        <div className="text">
      <h1>{props.title}</h1>
      <h2>{props.time}</h2>
      </div>
      <button>Join</button>
    </div>
  );
}
