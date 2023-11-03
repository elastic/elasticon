const Banner = ({ data }) => {
  return (
    <div className=" flex">
      <strong>{data.heading}</strong>
      <span>{data.subheading}</span>
    </div>
  );
};

export default Banner;