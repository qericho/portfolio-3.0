// Title component displays a section title and subtitle, centered and styled.
const Title = ({ title, subtitle }) => {
  return (
    // Container with padding and background
    <div className="text-center pt-20 md:pt-35 pb-10 bg-theme">
      {/* Main title */}
      <h2 className="text-4xl md:text-5xl font-bold text-theme">{title}</h2>
      {/* Subtitle */}
      <p className="mt-2 text-muted">{subtitle}</p>
    </div>
  );
};

export default Title;
