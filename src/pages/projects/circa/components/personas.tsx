type PersonasProps = {
  icon: string;
  name: string;
  info: string;
  position: string;
  LifestyleBehavior: string[];
  NeedsPainPoints: string[];
};

function Personas({
  icon,
  name,
  info,
  position,
  LifestyleBehavior,
  NeedsPainPoints,
}: PersonasProps) {
  return (
    <div className="flex flex-col gap-5 rounded-[12px] xl:gap-8">
      <div className="flex flex-row items-center gap-5">
        <img src={icon} alt="img" className="aspect-[1/1] w-[86px] xl:w-[100px]" />
        <div className="flex flex-col">
          <p className="mb-1 text-20b text-gravel-25 xl:text-24b">{name}</p>
          <p className="xl:text-15m mb-2 text-12m text-gravel-300">{info}</p>
          <div className="w-fit rounded-sm bg-[#238549] px-2 py-1 text-12m text-gravel-25 xl:text-12m">
            {position}
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-5 xl:flex-row">
        <div className="flex flex-1 flex-col gap-3 rounded-[16px] bg-gravel-600 p-4 xl:p-5">
          <p className="text-14s text-gravel-25 xl:text-20s">Lifestyle & Behavior:</p>
          <ul className="flex flex-col gap-2 xl:gap-3">
            {LifestyleBehavior.map((item, index) => (
              <li
                key={index}
                className="list-inside list-disc pl-[10px] text-14r text-gravel-100 xl:text-18r"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-1 flex-col gap-3 rounded-[16px] bg-gravel-600 p-3 xl:p-5">
          <p className="text-16s text-gravel-25 xl:text-20s">Lifestyle & Behavior:</p>
          <ul className="flex flex-col gap-2 xl:gap-3">
            {NeedsPainPoints.map((item, index) => (
              <li
                key={index}
                className="list-inside list-disc pl-[10px] text-14r text-gravel-100 xl:text-18r"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Personas;
