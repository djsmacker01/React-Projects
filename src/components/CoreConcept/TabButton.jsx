export default function TabButton({ children }) {
    function handleClick() {
        console.log('handleClick')
    }
  return (
    <li>
      <button onClick={handleClick}>{children}</button>
    </li>
  );
}
