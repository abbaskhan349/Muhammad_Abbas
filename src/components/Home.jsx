import abbaspic from '../images/abbas_pic.png';

function Home() {
  return (
    <div className="px-[25px] mt-[80px]">
      <div className="h-[330px] w-[600px] rounded-3xl bg-zinc-900 p-[50px]">
        <div className="card card-side rounded-3xl shadow-xl bg-zinc-900">
          <figure>
            <img
              src={abbaspic}
              alt="Movie"
              className='h-[230px] w-[250px]'
            />
          </figure>
          <div className="card-body">
            <h4 className='text-sm uppercase'>A Frontend Developer</h4>
            <h2 className='text-[30px] text-white font-bold'>Muhammad Abbas</h2>
            <p className='text-sm'>I am a web developer based in Pakistan</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
