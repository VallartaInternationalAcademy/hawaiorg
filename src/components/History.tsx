import banner from "../assets/images/banner.png";

const History = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="my-auto mx-auto">
        <img src={banner} className="h-[80%] w[80%] pl-32" />
      </div>
      <div className="pr-24 text-xl row">
        <span className="text-4xl text-center font-bold">
          Lorem ipsum dolor sit.
        </span>
        <span>
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
          laboriosam amet architecto hic sequi fuga vel provident tempora at
        </span>
        <span className="justify-content-center text-center">
          <button
            className="bg-main text-white p-6 px-12  text-2xl"
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
