const Button = ({ children, variant }) => {
  return (
    <button
      className={`button-slant min-w-[150px] py-1 md:py-2 px-3 md:px-5 text-lg ${
        variant === "black" ? "bg-black text-[#FDEFBC] border border-[#FDEFBC]" : "bg-white text-[#DCB012] border-2 border-[#DCB012]"
      }`}
    >
      <p className="button-slant-label">{children}</p>
    </button>
  );
};

export default Button;
