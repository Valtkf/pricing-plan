export default function Home() {
  return (
    <main className="bg-[#010B25] flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col justify-center items-center">
        <button className="border-[1px] border-[#97BAFF66] bg-[#041642] w-[150px] h-[36px] rounded-3xl text-sm text-[#97BAFF66]">
          Nos offres
        </button>
        <h1 className="text-4xl font-bold">Des prix en accord avec</h1>
        <h1 className="text-4xl font-bold"> notre vision</h1>
      </div>
    </main>
  );
}
