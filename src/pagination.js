function Pagination({ totalPage, postPerPage, setCurrentPage }) {
  let page = [];
  for (let i = 0; i < Math.ceil(totalPage / postPerPage); i++) {
    page.push(i + 1);
  }

  return (
    <div className="btn-container">
      {page.map((itr) => (
        <button className="toggle-btn"key={itr} onClick={() => setCurrentPage(itr)}>
          {itr}
        </button>
      ))}
    </div>
  );
}

export default Pagination;
