import {PhotoView } from 'react-photo-view';

const MonthImages = [{
    src: "Images/Month_1_2.png",
    alt: "Month 1 and 2",
},
{
    src: "Images/Month_3_4.png",
    alt: "Month 3 and 4",
},
{
    src: "Images/Month_5_6.png",
    alt: "Month 5 and 6",
},
{
    src: "Images/Month_7_8.png",
    alt: "Month 7 and 8",
},
{
    src: "Images/Month_9_10.png",
    alt: "Month 9 and 10",
},
{
    src: "Images/Month_11_12.png",
    alt: "Month 11 and 12",
}]

export default function ProjectOne() {
  return (
    <div className="bg-black">
        <div className="w-full max-w-360 mx-auto font-UTM text-white p-5 md:p-10 text-2xl md:text-3xl uppercase tracking-wide">
            <h1 className="px-5 md:px-0">Project 1: Hue Dynasty Illustration</h1>
            <div className="flex flex-col md:flex-row py-10 px-2 gap-6">
                <div className="flex-2 flex justify-center md:justify-end items-center pb-10 md:pb-0">
                <PhotoView src="Images/Month_Cover.png">
                    <img className="h-120" src="Images/Month_Cover.png" alt="Month Cover" />
                </PhotoView>
                </div>
                <div className="flex flex-3 flex-wrap gap-6 items-center justify-center">
                {MonthImages && MonthImages.map((image, index) => (
                    <PhotoView key={index} src={image.src}>
                        <img className="h-120 md:h-60" src={image.src} alt={image.alt} />
                    </PhotoView>
                ))}
                </div>
            </div>
            <p className="font-UTM text-center text-sm px-2">The 2025 Calendar Project is inspired by the traditional patterns and decorative motifs of the Nguyen Dynasty. The design combines cultural heritage with a modern layout, highlighting the beauty of Vietnamese royal art. Each month features elegant ornamental details that reflect history, tradition, and craftsmanship, creating a unique and meaningful calendar for 2025.</p>
        </div>
    </div>
  )
}
