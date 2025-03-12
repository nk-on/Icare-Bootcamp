function List({ items }:{items:string[]}) {
  return (
    <>
      <ul>{items.map((item,idx) => <li key={idx}>{item}</li>)}</ul>
    </>
  );
}
export default List;
