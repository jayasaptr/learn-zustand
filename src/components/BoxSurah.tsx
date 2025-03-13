import Surah from "@/assets/surah_icon.svg"
import { BookOpenText, Box } from "lucide-react"

const BoxSurah = () => {
    return (
        <div className="py-6 px-4 flex flex-row rounded-xl shadow-[0_2px_12px_rgba(0,0,0,0.08)] bg-white">
            <div className="flex flex-row items-center w-full justify-between">
                <div className="flex flex-row gap-3">
                    <div className="relative flex justify-center items-center">
                        <img src={Surah} />
                        <h3 className="absolute font-poppins font-medium text-sm">1</h3>
                    </div>
                    <div className="flex flex-col gap-3">
                        <h3>Al-Fātiḥah <span className="text-[#32B7C5] text-sm">(Pembuka)</span></h3>
                        <div className="flex flex-row gap-3">
                            <div className="flex flex-row gap-1 py-1 px-2 bg-gray-100 rounded-[6px] items-center">
                                <Box className="text-gray-400 w-4 h-4" />
                                <p className="text-sm text-gray-400">Makiyyah</p>
                            </div>
                            <div className="flex flex-row gap-1 py-1 px-2 bg-gray-100 rounded-[6px] items-center">
                                <BookOpenText className="text-gray-400 w-4 h-4" />
                                <p className="text-sm text-gray-400">7 Ayat</p>
                            </div>
                        </div>
                    </div>
                </div>
                <h3 className="text-lg text-gray-600 font-semibold flex justify-end">الفاتحة</h3>
            </div>
        </div>
    )
}

export default BoxSurah