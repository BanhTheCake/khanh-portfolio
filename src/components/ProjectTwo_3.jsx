import { PhotoView } from "react-photo-view"
import AiIcon from "/Images/IconAi.svg"
import PsIcon from "/Images/IconPs.svg"

const Posters = [
    {src: "Images/Poster1.png", alt: "Poster 1"},
    {src: "Images/Poster2.png", alt: "Poster 2"},
    {src: "Images/Poster3.png", alt: "Poster 3"},
    {src: "Images/Poster4.png", alt: "Poster 4"},
]

const Materials = [
    {src: "Images/Material_1.JPG", alt: "Material 1", title: `STAGE CONCEPT "TỨ QUÝ QUANG HOA"`},
    {src: "Images/Material_2.JPG", alt: "Material 2", title: `FOCUS STAGE CONCEPT "TỨ QUÝ QUANG HOA"`},
    {src: "Images/Material_3.JPG", alt: "Material 3", title: `PRINTED MATERIALS "TỨ QUÝ QUANG HOA"`},
]

export default function ProjectTwo_3() {
  return (
    <div>
    <div className="flex flex-col md:flex-row items-center gap-10 font-UTM text-white pb-5">
        <div className="flex-3 -mt-10 sm:-mt-30">
            <img className="w-full" src="Images/Gate.png" alt="Cổng chào" />
            <p className="text-center uppercase md:-mt-15 xl:-mt-20">ILLUSTRATION FOR GATE CONCEPT</p>
        </div>
        <div className="flex-2 flex flex-col gap-5">
            <h1 className="text-2xl uppercase">Gate Concept "Tứ Quý Quang Hoa"</h1>
            <p>The event entrance is inspired by the majestic gates of the Nguyen Dynasty, reflecting the elegance and grandeur of Vietnam’s royal heritage. Traditional architectural elements such as layered roofs, decorative patterns, and symmetrical structures are reinterpreted in a contemporary design language. Combined with royal yellow and jade green tones, the entrance creates a welcoming and immersive experience, inviting guests to step into a space where history, culture, and modern creativity come together.</p>
        </div>
    </div>
    <div className="flex flex-col md:flex-row items-center gap-10 font-UTM text-white">
        <div className="flex-2 flex flex-col gap-5">
            <h1 className="text-2xl uppercase">PhotoBooth Concept "Tứ Quý Quang Hoa"</h1>
            <p>The photobooth concept is inspired by the traditional relief carvings and decorative screens of Hue’s royal architecture. Intricate patterns, floral motifs, and ornamental details are reimagined to create an elegant and immersive backdrop that reflects the beauty of Nguyen Dynasty craftsmanship. The layered composition of the relief-inspired elements and the iconic Hue-style screen adds depth and sophistication, offering guests a unique photo experience that celebrates the cultural heritage and artistic identity of the ancient capital.</p>
        </div>
        <div className="flex-3 -mt-10">
            <img className="w-full" src="Images/Booth.png" alt="Cổng chào" />
             <p className="text-center uppercase pt-5 md:pt-0">ILLUSTRATION FOR PHOTOBOOTH CONCEPT</p>
        </div>
    </div>
     <div className="flex flex-col items-center font-UTM text-white py-10 md:py-20">
                <div className="flex items-center justify-center  gap-5 w-full max-w-200 pb-4">
                <div className="h-1 border-2 bg-white opacity-30 flex-1 hidden md:block"></div>
                <h1 className="text-2xl text-center uppercase">The Printed Material Illustration</h1>
                <div className="h-1 border-2 bg-white opacity-30 flex-1 hidden md:block"></div>
                </div>
                <div className="flex items-center gap-2 max-w-150">
                <div className="flex items-center gap-2">
                                <p className="text-2xl">App Used :</p>
                                <img className="w-12" src={AiIcon} alt="AI" />
                                <img className="w-12" src={PsIcon} alt="PS" />
                                </div>
                </div>
                
        </div>
        <div className="flex flex-col items-center font-UTM text-white pb-10">
            <img className="pb-20" src="Images/BroChure_1.png" alt="Brochure 1" />
            <img className="pb-10" src="Images/Brochure_2.png" alt="Brochure 2" />
            <p className="uppercase">BROCHURE DESIGN</p>
        </div>
        <div className="flex flex-col items-center font-UTM text-white py-5 md:py-10 gap-10">
            <div className="flex gap-10 flex-wrap justify-center">
                {Posters && Posters.map((poster, _) => (
                      <PhotoView src={poster.src}>
                    <img className="flex-1 2xl:h-100 sm:h-80 object-contain " src={poster.src} alt={poster.alt} key={poster.src} />
                      </PhotoView>
                ))}
            </div>
            <p className="uppercase">Poster Design</p>
        </div>
        <div className="flex flex-col items-center  font-UTM text-white pb-5 md:pb-10">
                <div className="flex items-center justify-center gap-5 w-full max-w-200 pb-4">
                <div className="h-1 border-2 bg-white opacity-30 flex-1 hidden md:block"></div>
                <h1 className="text-2xl text-center uppercase">The Model Concept</h1>
                <div className="h-1 border-2 bg-white opacity-30 flex-1 hidden md:block"></div>
                </div>
                <div className="flex items-center gap-2 max-w-150"></div>
        </div>
        {Materials && Materials.map((material, _) => (
            <div className="flex flex-col items-center font-UTM text-white pb-10" key={material.src}>
                <div className="flex gap-10 flex-wrap justify-center pb-10">
                    <PhotoView src={material.src}>
                        <img className="flex-1 w-200 object-contain " src={material.src} alt={material.alt} />
                    </PhotoView>
                </div>
                <p className="uppercase">{material.title}</p>
            </div>
        ))}
    </div>
  )
}
