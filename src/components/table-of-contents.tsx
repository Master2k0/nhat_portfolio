type TableOfContentsProps = {
  listIds: string[];
};

function TableOfContents({ listIds }: TableOfContentsProps) {
  return (
    <div className="w-[250px]">
      {listIds.map((id) => (
        <div className="h-16 px-5">
          <a href={`#${id}`} key={id} className="text-18r">
            {id}
          </a>
        </div>
      ))}
    </div>
  );
}

export default TableOfContents;
