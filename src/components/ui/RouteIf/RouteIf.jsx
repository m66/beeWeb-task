const RouteIf = ({ elem, showWhen }) => {
  if (showWhen) {
    return elem;
  }

  return null;
};

export default RouteIf;
