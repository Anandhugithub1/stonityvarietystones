import Image1 from '../assets/stonity.png';

// Import more images as needed

const Gallery = () => {
  return (
    <div className="container mx-auto px-4" id='gallery'>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div>
          <img src={Image1} alt="Gallery Image 1" className="w-full rounded-lg shadow" />
        </div>
       
        {/* Add more image divs as needed */}
      </div>
    </div>
  );
};

export default Gallery;