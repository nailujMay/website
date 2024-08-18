"use client";
import { useState, useEffect } from "react";
type Category = "street" | "events" | "portraits" | "travel";

interface Photos {
  [key: string]: string[];
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

export default function BodyPhoto() {
  const [selectedCategory, setSelectedCategory] = useState<Category>(
    categories[0]
  );
  const [photos, setPhotos] = useState<string[]>([]);

  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

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
  }, [selectedCategory]);

  return (
    <>
      <div className=" grid grid-cols-[1fr_3fr] mx-16">
        {/* body headings */}
        <div className="mx-4 pr-8">
          <div className="font-roboto_mono mb-6">
            <h1 className="text-6xl ">01 </h1>
            <h1 className="text-4xl">photos</h1>
          </div>
          <div className="my-4 text-sm">
            taking my camera where ever I go, capturing memories yada yad a yada{" "}
          </div>
          {/* menu  */}
          <div className="text-sm font-roboto-700">
            <ul>
              {categories.map((category) => (
                <li
                  key={category}
                  className={`cursor-pointer p-2 ${
                    selectedCategory === category ? "underline" : ""
                  }`}
                  onClick={() => handleCategoryClick(category)}
                >
                  {category}
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* gallery body */}
        <div>
          <div className="columns-3 gap-4">
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
