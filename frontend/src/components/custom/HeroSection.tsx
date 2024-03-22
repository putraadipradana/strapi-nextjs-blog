interface HeroSectionProps {
  id: number;
  __component: string;
  heading: string;
  subHeading: string;
}

export function HeroSection({ data }: { readonly data: HeroSectionProps }) {
  const { heading, subHeading } = data;
  return (
    <div className="mx-auto max-w-2xl lg:mx-0">
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        {heading}
      </h2>
      <p className="mt-2 text-lg leading-8 text-gray-600">{subHeading}</p>
    </div>
  );
}
