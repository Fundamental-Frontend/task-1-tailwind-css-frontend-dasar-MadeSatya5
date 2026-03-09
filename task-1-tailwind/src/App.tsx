import Button from "./components/Button";
import Card from "./components/Card";

function App() {
  return (
    <main>
      <section className="bg-primary py-10 min-h-[50vh] flex items-center">
        <div className="text-white mx-auto w-full max-w-6xl px-6">
          <div className="flex flex-col gap-5">
            <h1 className="text-3xl md:text-4xl lg:text-5xl text-white font-semibold text-center">
              EduSmart
            </h1>

            <p className="text-sm md:text-base lg:text-lg text-center md:text-left">
              EduSmart adalah platform pendidikan digital yang dirancang untuk
              membantu siswa belajar dengan lebih mudah, terarah, dan efektif.
              Melalui materi pembelajaran yang terstruktur, fitur interaktif,
              serta akses ke berbagai sumber pengetahuan dalam satu platform,
              EduSmart mendukung proses belajar yang fleksibel dan modern.
              Platform ini memungkinkan pengguna untuk memahami materi dengan
              lebih mendalam, meningkatkan keterampilan, serta mempersiapkan
              diri menghadapi tantangan akademik dan perkembangan teknologi di
              masa depan.
            </p>

            <div className="flex justify-center md:justify-end">
              <Button label="Mulai Belajar" variant="secondary" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary py-10 min-h-[50vh] items-center">
        <div className="text-white mx-auto w-full max-w-6xl px-6">
          <div className="flex flex-col gap-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl text-white font-semibold text-center">
              Fitur Unggulan
            </h1>

            <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {CARD_ITEMS.map((item) => (
                <Card
                  icon={item.icon}
                  title={item.title}
                  description={item.description}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-background py-12">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="flex flex-col items-center gap-5 text-center">
            <h2 className="text-2xl md:text-3xl font-semibold">
              Siap mulai belajar?
            </h2>

            <p className="text-sm md:text-base max-w-xl text-muted-foreground">
              Bergabunglah dengan EduSmart dan mulai perjalanan belajar kamu
              dengan materi yang interaktif, mentor profesional, dan sertifikat
              resmi.
            </p>

            <Button label="Mulai Belajar Sekarang" variant="primary" />

            <p className="text-xs text-muted-foreground mt-4">
              © {new Date().getFullYear()} EduSmart. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}

export default App;

const CARD_ITEMS = [
  {
    icon: "📖",
    title: "Materi Interaktif",
    description:
      "Materi pembelajaran disajikan secara interaktif agar siswa dapat memahami konsep dengan lebih mudah melalui kombinasi teks, ilustrasi, dan latihan.",
  },
  {
    icon: "🧑‍🏫",
    title: "Mentor Profesional",
    description:
      "Belajar langsung dari mentor berpengalaman yang siap membimbing dan memberikan penjelasan mendalam pada setiap materi.",
  },
  {
    icon: "🧾",
    title: "Sertifikat Resmi",
    description:
      "Dapatkan sertifikat setelah menyelesaikan materi pembelajaran sebagai bukti kompetensi yang dapat digunakan untuk portofolio.",
  },
];
