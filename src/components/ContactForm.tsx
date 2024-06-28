const ContactForm = () => {
  return (
    <div className="p-4 md:p-12">
      <div className="grid grid-cols-1 md:grid-cols-3">
        <div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase">
            Lorem ipsum Lorem. <span className="text-main">Lorem, ipsum.</span>
          </h1>
        </div>
      </div>
      <span className="mt-6 text-sm sm:text-md md:text-lg">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, quos!
      </span>
      <div className="mt-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 px-4 sm:px-16 md:px-32 lg:px-64">
          <input
            type="text"
            placeholder="First Name"
            className="input input-bordered w-full rounded-2xl"
          />
          <input
            type="text"
            placeholder="Email"
            className="input input-bordered w-full rounded-2xl"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="input input-bordered w-full rounded-2xl"
          />
          <input
            type="text"
            placeholder="Phone Number"
            className="input input-bordered w-full rounded-2xl"
          />
        </div>
        <div className="text-center mt-12">
          <button
            className="bg-main text-white p-2 sm:p-4 md:p-6 px-4 sm:px-6 md:px-8 lg:px-12 text-sm sm:text-md md:text-lg lg:text-2xl"
            style={{ borderRadius: "4rem" }}
          >
            SUBMIT
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
