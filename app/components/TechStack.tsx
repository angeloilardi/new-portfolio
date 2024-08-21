export default function TechStack({ name, url }: { name: string, url:string}) {
    return <div key={name} className="m-4 hover:opacity-70">
        <img src={url} alt={`icon for ${name}`} />
    </div>
    
}