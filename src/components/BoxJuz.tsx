import Surah from "@/assets/surah_icon.svg"
const BoxJuz = () => {
    return (
        <div className="flex flex-col rounded-xl shadow-[0px_2px_12px_rgba(0,0,0,0.12)] overflow-hidden">
            <div className="bg-[#85E6C5] py-5 flex justify-center">
                <h3 className="font-poppins text-gray-800 font-bold text-sm">Juz 1</h3>
            </div>
            <div className="bg-white py-4 px-6 flex flex-col gap-3">
                <div className="flex flex-row gap-3 items-center">
                    <div className="relative flex justify-center items-center">
                        <img src={Surah} alt="surah" />
                        <h3 className="absolute font-poppins font-medium text-sm">1</h3>
                    </div>
                    <div className="flex flex-col gap-3">
                        <h3>Al-Fātiḥah <span className="text-[#32B7C5] text-sm">(1)</span></h3>
                    </div>
                </div>
                <div className="flex flex-row gap-3 items-center">
                    <div className="relative flex justify-center items-center">
                        <img src={Surah} alt="surah" />
                        <h3 className="absolute font-poppins font-medium text-sm">2</h3>
                    </div>
                    <div className="flex flex-col gap-3">
                        <h3>Al-Baqarah <span className="text-[#32B7C5] text-sm">(141)</span></h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BoxJuz