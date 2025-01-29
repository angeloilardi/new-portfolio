export default function TechStack({ name, url }: { name: string, url:string}) {
    return (
      <div
        key={name}
        className="m-4 hover:opacity-70 translate-x-1/3 intersect:translate-x-0 transition ease-out duration-500"
      >
        <img src={url} alt={`icon for ${name}`} />
      </div>
    );
    
}