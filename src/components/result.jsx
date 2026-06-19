import Button from "./ui/button";

export default function Result({
  name,
  score,
  total,
  time,
  answered,
  onRestart,
}) {
  const jumlahJawab = answered || total;
  const jumlahBenar = score;
  const jumlahSalah = jumlahJawab - score;

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  const timeString =
    minutes > 0 ? `${minutes}m ${seconds}s` : `${seconds} detik`;

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-[450px] flex flex-col items-center justify-center gap-6 rounded-lg bg-[#171717] p-8 text-center text-white">
        <div className="text-5xl mb-2">🎉</div>

        <h1 className="text-xl font-semibold leading-relaxed">
          Selamat <span className="text-blue-400">{name}</span> sudah
          menyelesaikan quiz!
        </h1>

        <div className="w-full grid grid-cols-2 gap-3 mt-2">
          <div className="bg-neutral-800 p-3 rounded-md flex flex-col items-center">
            <span className="text-neutral-400 text-[10px] uppercase tracking-wider mb-1">
              Sisa Waktu
            </span>
            <span className="text-xl font-bold text-yellow-400">
              {timeString}
            </span>
          </div>

          <div className="bg-neutral-800 p-3 rounded-md flex flex-col items-center">
            <span className="text-neutral-400 text-[10px] uppercase tracking-wider mb-1">
              Dijawab
            </span>
            <span className="text-xl font-bold text-blue-400">
              {jumlahJawab}/{total}
            </span>
          </div>

          {/* correct answer total */}
          <div className="bg-neutral-800 p-3 rounded-md flex flex-col items-center">
            <span className="text-neutral-400 text-[10px] uppercase tracking-wider mb-1">
              Benar
            </span>
            <span className="text-xl font-bold text-green-400">
              {jumlahBenar}
            </span>
          </div>

          {/* wrong answer total */}
          <div className="bg-neutral-800 p-3 rounded-md flex flex-col items-center">
            <span className="text-neutral-400 text-[10px] uppercase tracking-wider mb-1">
              Salah
            </span>
            <span className="text-xl font-bold text-red-400">
              {jumlahSalah}
            </span>
          </div>
        </div>

        <div className="w-full mt-4" onClick={onRestart}>
          <Button type="button">Main Lagi</Button>
        </div>
      </div>
    </div>
  );
}
