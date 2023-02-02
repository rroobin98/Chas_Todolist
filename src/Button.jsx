export default function Button(props) {
  const { onClick, num } = props;
  // const onClick = props.onClick;

  return <button onClick={() => onClick(num)}>{num}</button>;
}
