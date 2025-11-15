import LinkDisplay from "@/app/components/LinkDisplay";
import getAllLinks from "@/app/lib/getAllLinks";


export default async function Home() {
  const link = await getAllLinks();

  return (
      <div>
          <h1 className='text-Roboto'>CS391 MP5: URL SHORTENER</h1>
          <div className="w-full bg-yellow-100">
                <LinkDisplay inputLinks={link}/>
          </div>
      </div>
  );
}
