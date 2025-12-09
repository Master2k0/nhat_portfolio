type WebUIDesginProps = {
  list: {
    description: string;
    img: string;
  }[];
};
function WebUIDesgin({ list }: WebUIDesginProps) {
  return (
    <div className="flex flex-col">
      {list.map((item, index) => (
        <div key={index}>
          <p className="mb-3 text-14s text-gravel-25 xl:mb-5 xl:text-18s">{item.description}</p>
          <img src={item.img} alt={item.description} />
          {index !== list.length - 1 && <div className="border-dash-custom my-6 xl:my-10" />}
        </div>
      ))}
    </div>
  );
}
export default WebUIDesgin;
