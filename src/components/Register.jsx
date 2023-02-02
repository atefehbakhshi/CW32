export default function Register() {
  return (
    <div className="flex gap-4 flex-col">
      <h1 className="text-center text-2xl">رایگان ثبت نام کنید</h1>
      <div className="flex gap-2 ">
        <input
          type="text"
          placeholder="نام"
          className="bg-transparent border-[#44535a] border-2 p-1 w-1/2 "
        />
        <input
          type="text"
          placeholder="نام خانوادگی"
          className="bg-transparent border-[#44535a] border-2 p-1 w-1/2 "
        />
      </div>
      <div>
        <select className="bg-transparent border-[#44535a] border-2 p-1">
          <option value="kardani" className="bg-gray-500">
            کاردانی
          </option>
          <option value="karshenasi" className="bg-gray-500">
            کارشناسی
          </option>
          <option value="karshenasi-arshad" className="bg-gray-500">
            کارشناسی ارشد
          </option>
        </select>
      </div>
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

      <button className="bg-[#1ab08a] p-2">ثبت نام</button>
    </div>
  );
}
