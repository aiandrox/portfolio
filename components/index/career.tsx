export default function Career({ allCareersData }) {
  return (
    <div className="container mx-auto flex flex-wrap pt-4 pb-12">
      <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center">
        Career
      </h1>
      <div className="w-full mb-4">
        <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
      </div>

      <div className="relative flex flex-col p-6 w-full max-w-xl mx-auto">
        {allCareersData.map(({ id, title, date, iconName, description }) => (
          <div key={id} className="flex mb-12 md:mb-12">
            <div className="flex flex-col items-center">
              <div className="flex justify-center p-3 rounded-full align-center border-4 border-white bg-gray-500 bg-opacity-20">
                <img src={`/svgs/${iconName}.svg`} />
              </div>
              <div className="flex-1 w-px -mb-12 bg-gray-200 md:-mb-12"></div>
            </div>
            <div className="flex flex-col flex-1 ml-2 md:ml-4 space-y-4">
              <div className="flex flex-col pt-1 contents-center">
                <h3 className="text-lg font-bold">{title}</h3>
                <span className="text-sm text-gray-600">{date}</span>
              </div>
              <div className="flex flex-col space-y-4">
                <div className="-mt-2 prose prose-md">
                  <p>{description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
