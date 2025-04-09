import Link from "next/link";

const LP = () => {
  return (
    <div className="bg-black/70 p-20 rounded-md text-center flex flex-col items-center justify-center max-w-md max-h-[500px]">
      <h1 className="text-white text-5xl font-bold mb-16">家計簿アプリ</h1>
      <div className="flex flex-col space-y-12 w-[80%]">
        <Link
          href="/member/register"
          className="bg-white text-black py-2 rounded-md shadow-md hover:bg-gray-200 w-full text-center"
        >
          会員登録
        </Link>
        <Link
          href="/member/login"
          className="bg-white text-black py-2 rounded-md shadow-md hover:bg-gray-200 w-full text-center"
        >
          ログイン
        </Link>
      </div>
    </div>
  );
};

export default LP;
