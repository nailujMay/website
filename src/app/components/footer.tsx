export default function Footer() {
  return (
    <>
      <div className="py-4 font-inter bg-transparent ">
        <hr className="border-text" />
        <div className="my-4 mx-6 flex justify-between items-center text-sm">
          <div>
            <p>
              julian yam <br /> © 2024
            </p>
          </div>
          <div className="flex items-center ">
            <div className="flex flex-col md:flex-row">
              <a
                href="mailto:julian.c.yam@gmail.com"
                className="md:px-4 font-bold"
              >
                julian.c.yam@gmail.com
              </a>
              <a
                href="https://www.instagram.com/nailuj.may/"
                className="md:px-4"
                target="_blank"
              >
                instagram
              </a>
              <a
                href="https://www.youtube.com/@julian-yam"
                className="md:px-4"
                target="_blank"
              >
                youtube
              </a>
              <a
                href="https://x.com/nailuj_may"
                className="md:px-4"
                target="_blank"
              >
                twitter
              </a>
              <a
                href="https://github.com/nailujMay"
                className="md:px-4"
                target="_blank"
              >
                github
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
