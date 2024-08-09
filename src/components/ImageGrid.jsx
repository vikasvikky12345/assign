
const ImageGrid = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2 lg:grid-rows-2 lg:gap-10">
        <div className="relative h-100 sm:h-100 lg:h-100 rounded-full">
          <img src="password.jpeg" alt="First" className="object-cover w-full h-full " />
        </div>
        <div className="relative h-90 sm:h-90 lg:h-90 rounded-full">
          <img src="check.jpeg" alt="Second" className="object-cover w-full h-full" />
        </div>

        <div className="relative h-100 sm:h-100 lg:h-100 rounded-full border-gray-300">
          <img src="browse.jpeg" alt="Third" className="object-cover w-full h-full" />
        </div>
        <div className="relative h-110 sm:h-110 lg:h-110 rounded-full">
          <img src="privacy.jpeg" alt="Fourth" className="object-cover w-full h-full" />
        </div>
      </div>
    </div>
  );
};

export default ImageGrid;
