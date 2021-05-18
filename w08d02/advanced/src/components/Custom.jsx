const Custom = (props) => {
  return (
    <div>
      <h2 className={props.className}>{props.children}</h2>
    </div>
  );
};

export default Custom;
