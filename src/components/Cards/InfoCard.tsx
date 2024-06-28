interface Props {
  content: string;
  image: string;
  title: string;
}

const InfoCard = ({ content, image, title }: Props) => {
  return (
    <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
      <img alt="" src={image} className="h-56 w-full object-cover" />

      <div className="bg-white p-4 sm:p-6">
        <h3 className="mt-0.5 text-lg text-gray-900">{title}</h3>

        <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
          {content}
        </p>
      </div>
    </article>
  );
};

export default InfoCard;
