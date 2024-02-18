import abbaspic from "../images/my_pic.jpg";

function Home() {
  return (
    <div className="px-[40px] mt-[80px] flex flex-col gap-5">
      <div className="flex gap-5">
        <div className=" flex gap-8 h-80 w-[560px] rounded-3xl bg-white p-10">
          <img
            src={abbaspic}
            alt="Movie"
            className="w-[45%] rounded-tl-3xl rounded-br-3xl"
          />
          <div className="flex flex-col text-gray-400 justify-center w-[50%]">
            <h4 className="text-sm uppercase">A Frontend Developer</h4>
            <h2 className="text-[30px] font-semibold text-black">Muhammad Abbas</h2>
            <p className="text-sm">I am a web developer based in Pakistan</p>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div className="bg-white rounded-[15px] h-[50px] w-[570px]">
            headline
          </div>
          <div className="flex gap-5 h-[260px] ">
            <div className="bg-white rounded-lg w-[275px]">box 1</div>
            <div className="bg-white rounded-lg w-[275px]">box 2</div>
          </div>
        </div>
      </div>
      <div className="flex gap-5 h-[260px] mb-5">
        <div className="">
          <div className="w-[560px] h-[260px] rounded-3xl bg-white p-[25px]">
            services
          </div>
        </div>
        <div className="flex gap-5">
          <div className="bg-white rounded-lg w-[275px]">box 1</div>
          <div className="bg-white rounded-lg w-[275px]">box 1</div>
        </div>
      </div>
      <div className="h-[260px] flex gap-5">
        <div className="w-[600px] bg-white p-6 rounded-xl">content</div>
        <div className="w-[600px] bg-white p-6">content</div>
      </div>
    </div>
  );
}

export default Home;
