type HomePageProps = {
  setCount: React.Dispatch<React.SetStateAction<number>>;
};

const HomePage = ({ setCount }: HomePageProps) => {
  const updateCount = () => {
    setCount((prev) => prev + 1); // ✅ Correctly increments count
  };

  return (
    <>
      <div>Click the button</div>
      <button
        onClick={updateCount}
        className="bg-slate-800 text-white px-6 py-2 rounded-2xl"
      >
        Add
      </button>
    </>
  );
};

export default HomePage;
