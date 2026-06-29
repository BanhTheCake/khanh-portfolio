import AiIcon from "/Images/IconAi.svg"

const Images = [{
    src: "Images/buffalo_calf.png",
    alt: "Con Nghê",
    position: "left",
    text: "The image of the Nghe, a traditional Vietnamese mythical creature, is an important symbol in Nguyen Dynasty art and architecture. It represents loyalty, protection, wisdom, and good fortune. With its graceful appearance and unique decorative details, the Nghe reflects the richness of Vietnamese cultural heritage while conveying a sense of dignity and harmony.",
    title: "Con Nghê",
    isCenter: false
}, {
    src: "Images/Dragon.png",
    alt: "Con Rồng",
    position: "right",
    text: "The image of the Dragon (Long) is one of the most important symbols in Vietnamese culture, especially during the Nguyen Dynasty. It represents power, prosperity, wisdom, and imperial authority. With its elegant curves and intricate patterns, the dragon reflects the beauty of traditional Vietnamese art and the rich heritage of the royal court.",
    title: "Con Rồng",
    isCenter: false
}, {
}, {
    src: "Images/Phonix.png",
    alt: "Con Phượng",
    position: "left",
    text: "The image of the Phoenix (Phung) is a symbol of beauty, grace, peace, and prosperity in Vietnamese culture. In Nguyen Dynasty art, the phoenix often represents nobility and harmony. Its elegant feathers and delicate patterns showcase the sophistication of traditional Vietnamese craftsmanship and cultural heritage.",
    title: "Con Phùng",
    isCenter: true
}]

export default function ProjectOne_2() {
  return (
    <div className="bg-black px-20 py-10">
    <div className="w-full max-w-360 mx-auto ">
    <div className="flex flex-col items-center  font-UTM text-white ">
            <h1 className="text-3xl text-center pb-4 uppercase">The Illustration </h1>
            <div className="flex items-center gap-2">
            <p className="text-2xl">App Used :</p>
            <img className="w-12" src={AiIcon} alt="AI" />
            </div>
    </div>
    <div className="relative flex flex-col items-center w-full">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('../Images/background_2.png')] bg-contain  bg-top opacity-10 z-0 "></div>
            {Images && Images.map((image, index) => (
                <div className={`flex ${image.isCenter ? "items-center" : "items-end"} justify-center py-10 gap-20 ${image.position === "right" ? "flex-row-reverse" : ""} z-1`} key={index}>
                    <div className={`flex-3 flex`}>
                        <img className="h-full" src={image.src} alt={image.alt} />
                    </div>
                    <div className={`flex-2 flex flex-col justify-center `}>
                    <h1 className={`font-UTM text-white text-3xl text-center pb-5 uppercase`}>{image.title}</h1>
                    <p className={`font-UTM text-white text-base `}>{image.text}</p>
                    </div>
                </div>
            ))}
                <div className={`flex flex-col items-end justify-center py-10 gap-20 max-w-180`}>
                    <div className={`flex-3 flex`}>
                        <img className="h-full" src="Images/Tiger.png" alt="Hổ Phù" />
                    </div>
                    <div className={`flex-2 flex flex-col justify-center `}>
                    <h1 className={`font-UTM text-white text-3xl text-center pb-5`}>Hổ Phù</h1>
                    <p className={`font-UTM text-white text-base `}>The image of Ho Phu is a traditional decorative motif often found in Nguyen Dynasty architecture and art. It symbolizes protection, strength, and the ability to ward off evil spirits. With its fierce expression and detailed design, Ho Phu reflects the power and spiritual beliefs of Vietnamese culture while adding a strong visual identity to traditional artworks.</p>
                    </div>
                </div>
        </div>
    </div>
    </div>
  )
}
