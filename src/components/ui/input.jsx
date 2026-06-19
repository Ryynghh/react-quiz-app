function Input({ ...props }) {
  return (
    <div>
      <input
        {...props}
        type={props.type || "text"}
        className="bg-white w-72 h-8 rounded-sm text-black placeholder:text-gray-500 px-2 outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}

export default Input;
