function Button({ type = "button", onClick, children }) {
  return (
    <div>
      <button
        type={type}
        onClick={onClick}
        className="text-[#212121] bg-[#E5E5E5] box-border border border-transparent hover:bg-neutral-300 focus:ring-4 focus:ring-neutral-500 shadow-xs font-medium leading-5 rounded-lg text-sm px-4 py-2.5 focus:outline-none w-60 h-10"
      >
        {children || "Start Quiz"}
      </button>
    </div>
  );
}

export default Button;
