import Button from "./Button";

type CardProps = {
  icon: string;
  title: string;
  description: string;
};

function Card({ icon, title, description }: CardProps) {
  return (
    <div className=" border p-6 md:p-8 lg:p-10 rounded-xl hover:shadow-xl cursor-pointer transition flex flex-col gap-3 h-full">
      <span className="text-3xl">{icon}</span>
      <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold">{title}</h1>
      <p className="text-sm md:text-base">{description}</p>
      <div className="flex mt-auto justify-end">
        <Button label="Mulai Belajar" variant="secondary" />
      </div>
    </div>
  );
}

export default Card;
