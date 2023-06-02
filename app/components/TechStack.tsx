export default function TechStack({ name, url }: { name: string, url:string}) {
    return <div key={name} className="m-4">
        <img src={url} alt={`icon for ${name}`}className="" />
    </div>
    
}