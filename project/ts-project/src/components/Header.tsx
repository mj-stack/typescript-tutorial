const Header = ({ count }: { count: number }) => {
  return (
    <header className="bg-slate-100 h-20 w-full border">
      Counter: &nbsp;
      <span>{count}</span>
    </header>
  );
};

export default Header;
