import 'tailwindcss/tailwind.css';

function HomePage() {
  return (
    <>
      <div className="site-container">
        <div className="space-y-4">
          <h1 className="text-2xl font-bold">
            Ben Caner Uçar.
            <p>İstanbul'da yaşayan Frontend Developer. </p>
          </h1>
          <p>
            Frontend teknolojileri, fotoğraf, doğa ile yakından ilgilenmekteyim.
          </p>
        </div>
      </div>

      <div className="site-4xl-container mt-20">
        <img src="/home.jpg"></img>
      </div>
    </>
  );
}

export default HomePage;
