import LinkDisplay from "@/app/components/LinkDisplay";

export default async function Home() {
  return (
      <div>
          <h1 className="bg-olivewood text-alabastergrey text-shadow-lg shadow-paleslate titan-one-regular text-3xl p-4 m-2">
              CS391 MP5: URL SHORTENER
          </h1>
          <LinkDisplay/>
      </div>
  );
}
