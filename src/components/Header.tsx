import DescGray from "../assets/desc_grey.svg";
import { listType } from "@/utils/constans";
import { ListItem } from "@/types/ListItem";
import LogoGreen from "../assets/logo_green.svg";
import { useListTypeStore } from "@/store/useListTypeStore";
import useHeaderStore from "@/store/useHeaderStore";
import { Button } from "./ui/button";
import { useEffect, useRef } from "react";
const Header = () => {
    // untuk type seperti surah / juz
    const { activeId, setActiveId } = useListTypeStore();
    // untuk scroll
    const { isVisible, setScroll, setHasReachedContent, setIsVisible } = useHeaderStore();
    const dataSurahRef = useRef<HTMLDivElement | null>(null);

    // Handle Scroll untuk Mengubah Visibility Header
    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            console.log("Scroll Position:", scrollY); // Debugging

            setScroll(scrollY);

            // Tampilkan header jika scroll lebih dari 50px
            setIsVisible(scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [setScroll, setIsVisible]);

    // Intersection Observer untuk Konten Surah
    useEffect(() => {
        if (!dataSurahRef.current) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                console.log("Is Intersecting:", entry.isIntersecting); // Debugging
                setHasReachedContent(entry.isIntersecting);
            },
            { threshold: 0.2 }
        );

        observer.observe(dataSurahRef.current);

        return () => observer.disconnect();
    }, [setHasReachedContent]);

    return (
        <header className={`fixed top-0 left-0 right-0 w-full border-b-2 border-b-gray-500 py-3 transition-opacity ease-in-out duration-300 bg-white z-50
            ${isVisible ? "opacity-100 shadow-lg" : "opacity-0 pointer-events-none"}`}>
            <div className="flex flex-col md:flex-row justify-between items-center max-w-full mx-auto w-full px-8">
                <div className="flex flex-row items-center gap-2">
                    <img src={LogoGreen} alt="Logo Quran" className="w-14 h-14 text-[#32B7C5]" />
                    <div className="flex flex-col">
                        <h1 className="font-poppins font-bold text-[#32B7C5] text-xl">Alquran</h1>
                        <h3 className="font-poppins font-light text-[#32B7C5] text-lg">Digitaliz.id</h3>
                    </div>
                </div>
                <div className="flex flex-row gap-2 items-center h-full mt-6 md:mt-0 justify-between w-full md:justify-normal md:w-auto">
                    <div className="flex gap-2">
                        {listType.map((item: ListItem) => (
                            <Button
                                key={item.id}
                                onClick={() => setActiveId(item.id)}
                                className={`text-xs border shadow-none flex gap-1 transition duration-300 
                                    ${activeId === item.id ? "bg-[#FBE09C] text-[#624BC3] border-none hover:bg-[#FBE09C]"
                                        : "bg-transparent text-[#828282] border-[#E0E0E0] hover:bg-[#FBE09C] hover:text-[#624BC3] hover:border-white"}`}>
                                <item.image className={`w-5 h-5 transition duration-300 ${activeId === item.id ? "text-[#624BC3]" : "text-[#828282]"}`} />
                                <p>{item.name}</p>
                            </Button>
                        ))}
                    </div>
                    <Button className="bg-transparent border-[#E0E0E0] shadow-none border hover:bg-transparent">
                        <img src={DescGray} alt="desc" />
                    </Button>
                </div>
            </div>
        </header>
    )
}

export default Header