import abbaspic from "../images/abbas_pic.png";

function Home() {
  return (
    <div className="px-[25px] mt-[80px] flex flex-col gap-5">
      <div className="flex gap-5">
        <div className="h-[330px] w-[560px] rounded-3xl bg-zinc-900 p-[50px]">
          <div className="card card-side rounded-3xl shadow-xl bg-zinc-900">
            <figure>
              <img src={abbaspic} alt="Movie" className="h-[230px] w-[250px]" />
            </figure>
            <div className="card-body">
              <h4 className="text-sm uppercase">A Frontend Developer</h4>
              <h2 className="text-[30px] text-white font-bold">
                Muhammad Abbas
              </h2>
              <p className="text-sm">I am a web developer based in Pakistan</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div className="bg-zinc-900 rounded-[15px] h-[50px] w-[570px]">
            headline
          </div>
          <div className="flex gap-5 h-[260px] ">
            <div className="bg-zinc-900 rounded-lg w-[275px]">box 1</div>
            <div className="bg-zinc-900 rounded-lg w-[275px]">box 2</div>
          </div>
        </div>
      </div>
      <div className="flex gap-5 h-[260px] mb-5">
        <div className="">
          <div className="w-[560px] h-[260px] rounded-3xl bg-zinc-900 p-[25px]">
            services
          </div>
        </div>
        <div className="flex gap-5">
          <div className="bg-zinc-900 rounded-lg w-[275px]">box 1</div>
          <div className="bg-zinc-900 rounded-lg w-[275px]">box 1</div>
        </div>
      </div>
      <div className="h-[260px] flex gap-5">
        <div className="w-[600px] bg-zinc-900 p-6 rounded-xl">content</div>
        <div className="w-[600px] bg-zinc-900 p-6">content</div>
      </div>
    </div>
  );
}

export default Home;
