export default function SwitchButtons({ switchButton, dispatch }) {
  return (
    <div className="flex justify-center mb-4">
      <button
        onClick={() => dispatch({ type: "login" })}
        className={`w-1/2 text-center py-2 ${
          !switchButton ? "bg-[#1ab08a]" : "bg-[#44535a]"
        }`}
      >
        ورود
      </button>
      <button
        onClick={() => dispatch({ type: "register" })}
        className={`w-1/2 text-center py-2 ${
          switchButton ? "bg-[#1ab08a]" : "bg-[#44535a]"
        }`}
      >
        ثبت نام
      </button>
    </div>
  );
}
