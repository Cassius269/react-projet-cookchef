function Loading() {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: 500 }}
    >
      <div
        className="spinner-border text-warning"
        role="status"
        style={{ width: 100, height: 100 }}
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}

export default Loading;
