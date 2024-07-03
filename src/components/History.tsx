import banner from "../assets/images/banner.png";

const History = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 justify-center text-center">
      <div className="flex justify-center items-center">
        <img
          src={banner}
          className="h-[60%] w-[60%] md:h-[70%] md:w-[70%] lg:h-[90%] lg:w-[90%] pl-0 md:pl-8 lg:pl-32"
        />
      </div>
      <div
        className="px-4 md:px-12 lg:pr-24 text-sm md:text-lg lg:text-xl"
        style={{ marginRight: "80px" }}
      >
        <span className="text-2xl md:text-3xl lg:text-4xl font-bold block mb-4 uppercase">
          Lorem ipsum dolor sit.
        </span>
        <span className="block mb-4 text-justify">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus,
          eligendi voluptatum? Distinctio facere blanditiis fuga vitae ut magni
          temporibus eveniet culpa corrupti aspernatur voluptate praesentium
          tenetur dolore velit alias, cum consequatur quos natus nisi dolorem,
          quam perspiciatis eos aut sed? Quia consequuntur assumenda sunt
          laudantium! Quas, quo delectus quam ex recusandae nesciunt inventore!
          Eius doloremque recusandae, quo quod dicta esse nulla alias id impedit
          ullam quaerat minima qui, blanditiis pariatur. Ab harum adipisci
          laborum sit nam! Exercitationem, mollitia non? Iste corporis
          laboriosam amet architecto hic sequi fuga vel provident tempora at
          dolorem maxime fugiat nobis mollitia, quod dolor autem! Ipsum
          necessitatibus iure delectus odit earum unde repellendus tempore quo,
          esse dignissimos ab deserunt ullam quaerat ducimus, blanditiis impedit
          iste pariatur. Reiciendis necessitatibus ut hic, incidunt facere autem
          magnam perferendis voluptatibus itaque mollitia temporibus aperiam id
          laborum sit nam! Exercitationem, mollitia non? Iste corporis
          laboriosam amet architecto hic sequi fuga vel provident tempora at.
        </span>
        <span className="flex justify-center mt-4">
          <button
            className="bg-main text-white p-4 md:p-6 px-6 md:px-8 lg:px-12 text-lg md:text-xl lg:text-2xl font-bold"
            style={{ borderRadius: "4rem" }}
          >
            READ MORE
          </button>
        </span>
      </div>
    </div>
  );
};

export default History;
