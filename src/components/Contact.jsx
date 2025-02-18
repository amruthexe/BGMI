import AnimatedTitle from "./AnimatedTitle";
import Button from "./Button";

const ImageClipBox = ({ src, clipClass }) => (
  <div className={clipClass}>
    <img src={src} />
  </div>
);

const Contact = () => {
  return (
    <div id="contact" className="my-20 min-h-96 w-screen  px-10">
      <div className="relative rounded-lg bg-black py-24 text-blue-50 sm:overflow-hidden">
        <div className="absolute -left-20 top-0 hidden h-full w-72 overflow-hidden sm:block lg:left-20 lg:w-96">
          <ImageClipBox
            src="/img/hi.jpg"
            clipClass="contact-clip-path-1"
          />
          {/* <ImageClipBox
            src="/img/hi.jpg"
            clipClass="contact-clip-path-2 lg:translate-y-40 translate-y-60"
          /> */}
        </div>

     

        <div className="flex flex-col items-center text-center">
          <p className="mb-10 font-general text-[10px] uppercase">
            Join BGMI Tournament
          </p>

          <AnimatedTitle
            title="let&#39;s b<b>u</b>ild the <br /> new era of <br /> g<b>a</b>ming t<b>o</b>gether."
            className="special-font !md:text-[6.2rem] w-full font-zentry !text-5xl !font-black !leading-[.9]"
          />
          <a
  href="https://forms.gle/v9GB7pPPDD5Hzx3a8"
  className="inline-block mt-4 px-6 py-3 bg-blue-500 text-white rounded-full text-center hover:bg-blue-600 transition duration-300"
  target="_blank"
  rel="noopener noreferrer"
>
          <Button title="Register Now" containerClass="mt-10 cursor-pointer" />
          </a>

        </div>
        
      </div>
    </div>
  );
};

export default Contact;
