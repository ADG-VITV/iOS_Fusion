export default function Description() {
    return (
      <section
        id="about"
        className="lg:h-[100vh] bg-black flex flex-col justify-center items-center"
      >
        <div className="flex flex-col items-center sm:hidden text-white m-6">
          <p className="text-3xl custom-font">
            <span className="text-[#5F2EEA]">iOS</span> FUSION
          </p>
          <p className="text-gray-400">CREATE.IDEATE.INNOVATE</p>
        </div>
        <div className="w-[90%] m-4 mb-8 sm:m-8 sm:w-[75%] sm:h-[60%] bg-[#1A1A1A] text-white sm:p-16 text-center rounded-xl ">
          <div className=" flex-col hidden sm:flex items-center">
            <p className="sm:text-4xl custom-font">
              <span className="text-[#5F2EEA]">iOS</span> FUSION
            </p>
            <p className="text-gray-400">CREATE.IDEATE.INNOVATE</p>
          </div>
          <p className="m-4 text-gray-400 text-justify sm:text-center">
            IOS Fusion 7.0, the flagship event of Advanced Developer Group
            (ADG), is an unmissable opportunity for aspiring app developers to
            shine. Held during Gravitas, VIT's premier Technical Fest, this
            two-day event is designed to captivate and challenge participants as
            they dive into the world of iOS development.
          </p>
          <p className="m-4 text-gray-400 text-justify sm:text-center">
            Join IOS Fusion 7.0 for a hands-on Swift workshop where you'll learn
            app development from expert mentors. Put your new skills to the test
            in an Appathon, racing to create innovative iOS apps. This event
            combines learning, creativity, and competition, offering a perfect
            start to your journey as a top-tier app developer.
          </p>
        </div>
      </section>
    );
}
