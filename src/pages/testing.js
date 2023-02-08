export default function Testing() {
  return (
    <div className="grid place-content-center h-screen">
      <div className="before:block before:absolute before:h-10 before:w-10 before:-inset-y-px before:-skew-y-3 before:bg-red-500 relative inline-block overflow-x-clip">
        <div className="w-10 h-10 bg-green-500 relative"></div>
      </div>
    </div>
  );
}
