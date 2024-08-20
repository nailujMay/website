export default function Footer() {
  return (
    <>
      <div className="py-4 font-inter bg-background ">
        <hr className="border-text" />
        <div className="my-4 mx-6 flex justify-between items-center text-sm">
          <div>
            <p>julian yam © 2024</p>
          </div>
          <div className="flex items-center ">
            <div className="flex flex-col md:flex-row">
              <a
                href="https://www.instagram.com/nailuj.may/"
                className="md:px-4"
              >
                instagram
              </a>
              <a href="https://www.youtube.com/@julian-yam" className="md:px-4">
                youtube
              </a>
              <a href="https://x.com/nailuj_may" className="md:px-4">
                twitter
              </a>
              <a href="https://github.com/nailujMay" className="md:px-4">
                github
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
