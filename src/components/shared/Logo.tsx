import Image from "next/image";

const Logo = ({ onClick }: { onClick?: (href: string) => void }) => {
  return (
    <div className="flex">
      <a
        href="#hero"
        className="flex items-center gap-1 text-2xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent"
        onClick={(e) => {
          e.preventDefault();
          if (onClick) onClick("#hero");
        }}
        aria-label="VentureSphere - Go to homepage"
      >
        <Image
          src="/icon.png"
          alt="VentureSphere Logo"
          width={30}
          height={30}
        />
        VentureSphere
      </a>
    </div>
  );
};
export default Logo;
