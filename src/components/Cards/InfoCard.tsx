interface Props {
  content: string;
  image: string;
  title: string;
}

const InfoCard = ({ content, image, title }: Props) => {
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="text-2xl text-center font-bold">{title}</h2>
        <p className="text-center">{content}</p>
      </div>
    </div>
  );
};

export default InfoCard;
