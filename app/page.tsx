import LinkDisplay from "@/app/components/LinkDisplay";


export default async function Home() {

  return (
      <div>
          <h1 className='text-Roboto'>CS391 MP5: URL SHORTENER</h1>
          <div className="w-full bg-yellow-100">
                <LinkDisplay/>
          </div>
      </div>
  );
}
