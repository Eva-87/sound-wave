function Title({ children, className = "" }) {
  return (
    <h1 className={`text-4xl md:text-6xl font-bold ${className}`}>
      {children}
    </h1>
  );
}

export default Title;
