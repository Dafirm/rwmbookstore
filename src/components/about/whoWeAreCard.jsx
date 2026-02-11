import Image from "next/image";

const WhoWeAreCard = ({ data, image }) => {
  return (
    <div className="who-are-card text-center">
      {image && (
        <div className="thumbnail mb--15">
          <Image
            src={image}
            alt={data.title}
            width={120}
            height={120}
            priority={false}
          />
        </div>
      )}

      <h6 className="title mb--10">{data.title}</h6>

      <p className="text">{data.text}</p>
    </div>
  );
};

export default WhoWeAreCard;
