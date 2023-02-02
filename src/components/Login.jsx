export default function Login() {
  return (
    <div className="flex gap-4 flex-col">
      <h1 className="text-center">خوش آمدید</h1>
      <input
        type="email"
        placeholder="پست الکترونیک"
        className="bg-transparent border-[#44535a] border-2 p-1 "
      />
      <div className="border-[#44535a] border-2 p-1 flex items-center justify-between">
        <input
          type="password"
          placeholder="کلمه عبور"
          className="bg-transparent"
        />
        <span>&#128065; &#128274;</span>
      </div>
      <p>فراموش کردید ؟</p>
      <button className="bg-[#1ab08a] p-2">ورود</button>
    </div>
  );
}
