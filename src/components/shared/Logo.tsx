import Image from "next/image";

const Logo = ({ onClick }: { onClick?: (href: string) => void }) => {
  return (
    <a
      href="#hero"
      className="flex justify-center items-center gap-1 text-2xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent"
      onClick={(e) => {
        e.preventDefault();
        if (onClick) onClick("#hero");
      }}
      aria-label="VentureSphere - Go to homepage"
    >
      <Image src="/icon.png" alt="VentureSphere Logo" width={30} height={30} />
      VentureSphere
    </a>
  );
};
export default Logo;
