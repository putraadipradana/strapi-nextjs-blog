import { HeroSection } from "@/components/custom/HeroSection";
import { PostSection } from "@/components/custom/PostSection";
import { getHomePageData } from "@/data/loader";

function blockRenderer(block: any) {
  switch (block.__component) {
    case "layout.hero-section":
      return <HeroSection key={block.id} data={block} />;
    case "layout.post-card":
      return <PostSection key={block.id} data={block} />;
    default:
      return null;
  }
}

export default async function Home() {
  const strapiData = await getHomePageData();
  const { blocks } = strapiData;
  if (!blocks) return <div>No blocks found!!</div>;
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {blocks.map((block: any) => blockRenderer(block))}
      </div>
    </div>
  );
}
