
export default function Header() {
  return (
    <div>
    <div className="flex h-screen flex-col items-center justify-center relative">
    <div className="absolute top-0 left-0 w-full h-full bg-[url('./Images/background_1.png')] bg-cover bg-center">
    <video className="w-full h-full object-cover object-center" src="Videos/Cover.mp4" autoPlay loop muted></video>
    <div className="absolute top-0 left-0 w-full h-full opacity-80 bg-linear-to-t from-black to-transparent"></div>
    </div>
    <div className="text-white z-10 flex flex-col">
            <p className="text-[3rem]/[3.8rem] font-UTM uppercase tracking-[3rem] text-center -mr-6 ">illustration</p>
        <p className="text-[14rem]/[12.8rem] font-starifeDemo uppercase tracking-wide ">portfolio</p>
        <div className="text-[1.6rem] flex justify-between w-full font-UTM">
            <p>Created By Kain</p>
            <p>Updated : 2026</p>
        </div>
        </div>
        </div>
    </div>
  )
}
