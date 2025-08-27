const Logo = ({ onClick }: { onClick?: (href: string) => void }) => {
  return (
    <a
      href="#hero"
      className="text-2xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent"
      onClick={(e) => {
        e.preventDefault();
        if (onClick) onClick("#hero");
      }}
      aria-label="VentureSphere - Go to homepage"
    >
      VentureSphere
    </a>
  );
};
export default Logo;
