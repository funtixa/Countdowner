export default ({ youtubeId }) => {
    return (
      <div
        className="video"
        style={{
          position: "relative",
          paddingBottom: "56.25%" /* 16:9 */,
          paddingTop: 25,
          height: 0
        }}
      >
        <iframe
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "20%",
            height: "20%"
          }}
          src={`https://www.youtube.com/embed/${<iframe width="693" height="390" src="https://www.youtube.com/embed/IjIa4cRgijg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>}`}
          frameBorder="0"
        />
      </div>
    );
  };