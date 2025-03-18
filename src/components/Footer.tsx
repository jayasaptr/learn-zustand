import useHeaderStore from "@/store/useHeaderStore";
import { ListSosmed } from "@/types/Sosmed";
import { listSosme } from "@/utils/constans";
import { Button } from "./ui/button";

const Footer = () => {
    const { isVisible } = useHeaderStore();
    return (
        <footer className={`fixed bottom-0 left-0 bg-[#007B88] py-6 w-full px-8 max-w-full mx-auto transition-opacity duration-300 ease-in-out ${isVisible ? "opacity-100 shadow-lg" : "opacity-0 pointer-events-none"} flex flex-row items-center justify-between`
        }>
            <p className="text-[#0EFBEB]">© 2025 Digitaliz.id - Semua Hak Dilindungi</p>
            <div className="flex flex-row">
                {listSosme.map((item: ListSosmed) => (
                    <Button key={item.id} className="bg-transparent">
                        <img src={item.image} />
                    </Button>
                ))}
            </div>
        </footer >
    )
}

export default Footer