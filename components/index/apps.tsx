import Link from "next/link";

export default function Profile() {
  return (
    <div className="container mx-auto px-2 pt-4 pb-1 flex flex-wrap">
      <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center">
        Apps
      </h1>
      <div className="w-full mb-4">
        <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
      </div>
      {[1, 2, 3, 4].map((n) => (
        <div key={n} className="w-full md:w-1/3 p-6 flex flex-col">
          <Link href={`/works/hikikomori`}>
            <a className="flex flex-wrap no-underline hover:no-underline">
              <div className="flex-1 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1497493292307-31c376b6e479?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
                  alt=""
                />

                <p className="w-full text-gray-600 text-xs md:text-sm pt-4">
                  2021-12-1
                </p>
                <div className="w-full font-bold text-xl text-gray-800">
                  サービス名Abcde
                </div>
              </div>
            </a>
          </Link>
        </div>
      ))}
    </div>
  );
}
