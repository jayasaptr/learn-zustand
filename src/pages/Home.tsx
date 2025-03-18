import { Input } from "@/components/ui/input";
import Logo from "../assets/Logo.svg";

import quranBg from "../assets/quran-bg.png";

import { Search } from "lucide-react";
import { TypeSelector } from "@/components/TypeSelector";
import { SurahList } from "@/components/SurahList";
import { Button } from "@/components/ui/button";
import DescIcon from "@/components/icons/DescIcon";
import BoxSurah from "@/components/BoxSurah";
import { useListTypeStore } from "@/store/useListTypeStore";
import BoxJuz from "@/components/BoxJuz";
import { useRef } from "react";

import MainLayout from "@/layouts/MainLayout";

const Home = () => {
    const type = useListTypeStore((state) => state.activeId);

    const dataSurahRef = useRef<HTMLDivElement | null>(null);

    return (
        <MainLayout>
            {/* Hero Section */}
            <div className="relative">
                {/* Background */}
                <div
                    className="relative w-full lg:h-[600px] h-[400px] bg-right bg-no-repeat bg-[length:800px_600px]"
                    style={{ backgroundImage: `url(${quranBg})` }}
                >
                    <div className="absolute inset-0 bg-cyan-500 opacity-75"></div>
                    <svg className="absolute bottom-0 w-full rotate-180" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                        <path fill="#fff" fillOpacity="1" d="M0,224L80,224C160,224,320,224,480,208C640,192,800,160,960,154.7C1120,149,1280,171,1360,181.3L1440,192L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
                    </svg>
                </div>

                {/* Content */}
                <div className="absolute inset-0 flex flex-col items-center py-6">
                    <div className="flex flex-row items-center gap-2">
                        <img src={Logo} alt="Logo Quran" className="w-16 h-16" />
                        <div className="flex flex-col">
                            <h1 className="font-poppins font-bold text-white text-2xl">Alquran</h1>
                            <h3 className="font-poppins font-light text-white text-xl">Digitaliz.id</h3>
                        </div>
                    </div>

                    <div className="relative mx-auto mt-7 max-w-lg w-full px-8">
                        <Input className="py-5 px-4 bg-white shadow-[0_3px_12px_rgba(0,0,0,0.08)] placeholder:text-[#32B7C5] border-none focus:border-none w-full" placeholder="Pencarian surah dalam Alquran..." />
                        <Search className="absolute top-1/2 right-11 -translate-y-1/2 text-[#624BC3]" />
                    </div>

                    <SurahList />

                    <div className="flex flex-row gap-2 md:justify-center justify-between w-full px-8 items-center h-full mt-6">
                        <TypeSelector />
                        <Button className="bg-transparent border-white shadow-none border hover:bg-transparent">
                            <DescIcon />
                        </Button>
                    </div>

                    {/* Data Surah / Juz */}
                    <div ref={dataSurahRef} className="mt-7 max-w-full mx-auto w-full grid grid-cols-1 gap-3 px-8 md:grid-cols-2 lg:grid-cols-3 pb-20">
                        {type === 0
                            ? Array.from({ length: 114 }).map((_, index) => <BoxSurah key={index} />)
                            : <BoxJuz />}
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default Home;
