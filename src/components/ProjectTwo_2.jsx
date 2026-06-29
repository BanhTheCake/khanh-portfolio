import AiIcon from "/Images/IconAi.svg"
import PsIcon from "/Images/IconPs.svg"
import AeIcon from "/Images/IconAe.svg"
import ProjectTwo_3 from "./ProjectTwo_3"

const videoGallery = [
  { video: "Videos/Project2_1.mp4", src: "Images/Apricot.png", alt: "Cây Mai" },
  { video: "Videos/Project2_2.mp4", src: "Images/Chrysanthemum.png", alt: "Cây Cúc" },
  { video: "Videos/Project2_3.mp4", src: "Images/Bamboo.png", alt: "Cây tre" },
  { video: "Videos/Project2_4.mp4", src: "Images/Tung.png", alt: "Cây Tung" }
]

export default function ProjectTwo_2() {
  return (
    <div className="bg-black px-20 py-5">
        <div className="w-full max-w-360 mx-auto ">
        <div className="flex flex-col items-center  font-UTM text-white ">
                <div className="flex items-center gap-5 w-full max-w-200 pb-4">
                <div className="h-1 border-2 bg-white opacity-30 flex-1"></div>
                <h1 className="text-3xl text-center uppercase">The Concept Illustration </h1>
                <div className="h-1 border-2 bg-white opacity-30 flex-1"></div>
                </div>
                <div className="flex items-center gap-2">
                <p className="text-2xl">App Used :</p>
                <img className="w-12" src={AiIcon} alt="AI" />
                <img className="w-12" src={PsIcon} alt="PS" />
                <img className="w-12" src={AeIcon} alt="AE" />
                </div>
        </div>
          <div className="relative flex items-center w-full text-white font-UTM py-10 gap-5">
            <div className="flex-3 flex flex-col items-center gap-10">
              <img className="w-full" src="/Images/NgoMon.png" alt="Concept 2" />
              <p className="text-center text-sm uppercase">Illustration for state concept</p>
            </div>
            <div className="px-2 flex-2">
              <h1 className="text-2xl pb-5 uppercase">State Concept : "Tứ Quý Quang Hoa"</h1>
              <p className="normal-case text-sm">The stage concept is inspired by Ngo Mon Gate, the iconic main entrance of the Imperial City of Hue and one of the most significant architectural symbols of the Nguyen Dynasty. The design reinterprets the gate’s majestic structure, layered roofs, and symmetrical composition to create a grand and elegant performance space. Traditional royal motifs are integrated with modern LED technology, enhancing the visual experience while preserving the essence of Vietnamese heritage. The use of royal yellow and jade green tones further reflects the sophistication, prestige, and cultural richness of the Nguyen imperial court, transforming the stage into a gateway that connects history, art, and contemporary creativity.</p>
            </div>
          </div>
          <div className="flex flex-wrap relative">
          <div className="absolute bottom-[-15%] left-0 w-full h-full opacity-50 bg-contain bg-top-left bg-[url(Images/MountainCover.png)] hidden md:block"></div>
          { videoGallery && videoGallery.map((video, _) => (
            <div className="relative flex p-10 md:flex-1/2" key={video.src}>
              <video className="z-1" src={video.video} autoPlay loop muted></video>
              </div>
          ))}
          </div>
          <p className="text-sm uppercase text-center text-white font-UTM">Illustration for visual led concept</p>
          <div className="flex flex-col items-center  font-UTM text-white py-10">
                <div className="flex items-center gap-5 w-full max-w-200 pb-4">
                <div className="h-1 border-2 bg-white opacity-30 flex-1"></div>
                <h1 className="text-2xl text-center uppercase">Visual Led Concept "Tú Quý Quang Hoa" </h1>
                <div className="h-1 border-2 bg-white opacity-30 flex-1"></div>
                </div>
                <div className="flex items-center gap-2 max-w-150 py-5">
                <p>The overall visual concept is inspired by the elegance of four Hue maidens and the Four Noble Plants—Apricot Blossom (Mai), Bamboo (Trúc), Chrysanthemum (Cúc), and Pine (Tùng). Each visual represents a unique virtue and beauty, reflecting the harmony between nature, culture, and the spirit of Hue. By combining traditional Vietnamese aesthetics, Nguyen Dynasty architectural elements, and modern visual effects, the LED stage creates a poetic journey that celebrates the timeless charm, grace, and cultural heritage of the ancient capital.</p>
                </div>
        </div>
        <div className="max-w-300 mx-auto text-white font-UTM">
        <div className="relative">
          <img className="w-full z-1 relative" src="/Images/House.png" alt="Visual Concept" />
          <video className="absolute top-[50%] left-[25%] w-[50%]  object-cover object-center" src="/Videos/Project2_5.mp4" autoPlay loop muted />
        </div>
          <p className="text-center text-sm uppercase py-2">Mockup for visual led concept</p>
        </div>
        <ProjectTwo_3 />
        </div>
        </div>
  )
}
