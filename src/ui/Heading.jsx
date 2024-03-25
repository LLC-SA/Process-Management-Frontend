function Heading({ children, as }) {
  switch (as) {
    case "h1":
      return <h1 className="text-xl font-semibold">{children}</h1>;
    case "h2":
      return <h2 className="text-lg font-semibold">{children}</h2>;
    case "h3":
      return <h3 className="text-base font-medium">{children}</h3>;
    default:
      break;
  }
}

export default Heading;
