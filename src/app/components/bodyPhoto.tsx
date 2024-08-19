"use client";
import { useState, useEffect } from "react";
type Category = "street" | "events" | "portraits" | "travel";

interface Photos {
  [key: string]: string[];
}
interface Description {
  [key: string]: string;
}

const categories: Category[] = ["street", "events", "portraits", "travel"];
const photosData: Photos = {
  street: [
    "/street/street_1.jpg",
    "/street/street_2.jpg",
    "/street/street_3.jpg",
    "/street/street_4.jpg",
    "/street/street_5.jpg",
    "/street/street_6.jpg",
    "/street/street_7.jpg",
    "/street/street_8.jpg",
    "/street/street_9.jpg",
    "/street/street_10.jpg",
  ],
  events: [
    "/events/events_2.jpg",
    "/events/events_3.jpg",
    "/events/events_4.jpg",
    "/events/events_5.jpg",
    "/events/events_6.jpg",
    "/events/events_7.jpg",
    "/events/events_8.jpg",
    "/events/events_9.jpg",
    "/events/events_10.jpg",
    "/events/events_12.jpg",
    "/events/events_13.jpg",
    "/events/events_14.jpg",
  ],
  portraits: [
    "/portraits/portrait_1.jpg",
    "/portraits/portrait_2.jpg",
    "/portraits/portrait_3.jpg",
    "/portraits/portrait_4.jpg",
    "/portraits/portrait_5.jpg",
    "/portraits/portrait_6.jpg",
    "/portraits/portrait_7.jpg",
    "/portraits/portrait_8.jpg",
    "/portraits/portrait_9.jpg",
  ],
  travel: [
    "/travel/travel_1.jpg",
    "/travel/travel_2.jpg",
    "/travel/travel_3.jpg",
    "/travel/travel_4.jpg",
    "/travel/travel_5.jpg",
    "/travel/travel_6.jpg",
    "/travel/travel_7.jpg",
    "/travel/travel_8.jpg",
    "/travel/travel_9.jpg",
  ],
};

const descriptionData: Description = {
  street:
    "It all started with street photography. Walking around the city, looking for that perfect frame. Street photography is a game of observation. You become a fly on the wall in a massive city, watching people go by, telling a story with every shot. ",
  events:
    "Working with brands such as Seek Discomfort, Hack the North, and ⁂ Socratica. Providing media that captures the essence of their product",
  portraits:
    "Currently taking graduation photos for students around the University of Waterloo",
  travel:
    "At the end of the day photography is just my excuse to travel. Seeing new places and capturing experiences from around the world, ",
};
export default function BodyPhoto() {
  const [selectedCategory, setSelectedCategory] = useState<Category>(
    categories[0]
  );
  const [photos, setPhotos] = useState<string[]>([]);

  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [description, setDiscription] = useState<string>("");

  const openModal = (image: string) => {
    setSelectedImage(image);
    setIsOpen(true);
    console.log("open image");
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedImage(null);
  };

  const handleCategoryClick = (category: Category) => {
    setSelectedCategory(category);
    console.log(category);
    console.log(photos);
  };

  useEffect(() => {
    // Update photos when the selectedCategory changes
    setPhotos(photosData[selectedCategory]);
    setDiscription(descriptionData[selectedCategory]);
  }, [selectedCategory]);

  return (
    <>
      <div className="md:grid grid-cols-[1fr_4fr] mx-16">
        {/* body headings */}
        <div className="mx-4 pr-8">
          <div className="font-roboto_mono mb-6">
            <h1 className="text-6xl ">01 </h1>
            <h1 className="text-4xl">photos</h1>
          </div>
          <div className="my-4 px-6 py-4 text-sm font-roboto bg-gray-200 ">
            Taking my camera where ever I go. Capturing moments so I'll never
            forget{" "}
          </div>
          {/* menu  */}
          <div className="text-sm my-10 ">
            <ul>
              {categories.map((category) => (
                <div>
                  <li
                    key={category}
                    className={`cursor-pointer p-2 font-roboto font-bold ${
                      selectedCategory === category ? "underline" : ""
                    }`}
                    onClick={() => handleCategoryClick(category)}
                  >
                    {category}
                  </li>
                  {selectedCategory === category && (
                    <p className="font-roboto text-sm my-2 px-4 italic">
                      {description}
                    </p>
                  )}
                </div>
              ))}
            </ul>
          </div>
        </div>
        {/* gallery body */}
        <div>
          <div className="gap-4 columns-2 md:columns-3 ">
            {photos.map((photo, index) => (
              <div key={index} className="mb-4 h-1/2">
                <img
                  src={photo}
                  alt={`Photo ${index}`}
                  className="object-contain w-full h-full "
                  onClick={() => openModal(photo)}
                />
              </div>
            ))}
          </div>
          {/* Modal */}
          {isOpen && selectedImage && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
              onClick={closeModal}
            >
              <div className="relative">
                <img
                  src={selectedImage}
                  alt="Expanded"
                  className="max-h-screen max-w-full"
                />
                {/* <button
                  onClick={closeModal}
                  className="absolute top-2 right-2 text-white text-2xl font-bold"
                >
                  &times;
                </button> */}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
