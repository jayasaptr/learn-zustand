import { surah } from "@/utils/constans";

export function SurahList() {
    return (
        <div className="mt-6 md:max-w-lg flex items-center px-8 mx-auto gap-3 w-full">
            <h3 className="text-white font-bold text-sm whitespace-nowrap">Sering dibaca:</h3>
            <div className="flex gap-2 overflow-x-auto flex-1">
                {surah.map((nama, index) => (
                    <div className="p-3 bg-[#85E6C5] rounded-3xl flex gap-1 shrink-0" key={index}>
                        <p className="text-[#624BC3] font-poppins font-medium text-xs">{nama}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}