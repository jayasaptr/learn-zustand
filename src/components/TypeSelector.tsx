import { ListItem } from "@/types/ListItem";
import { listType } from "@/utils/constans";
import { Button } from "./ui/button";
import { useListTypeStore } from "@/store/useListTypeStore";

export function TypeSelector() {
    const { activeId, setActiveId } = useListTypeStore();
    return (
        <div className="flex space-x-3">
            {listType.map((item: ListItem) => (
                <Button key={item.id} onClick={() => setActiveId(item.id)} className={`text-xs border shadow-none flex gap-1 transition duration-300 
                    ${activeId === item.id
                        ? "bg-yellow-100 text-[#624BC3] border-none hover:bg-yellow-100"
                        : "bg-transparent text-white border-white hover:bg-yellow-100 hover:text-[#624BC3] hover:border-white"
                    }`}
                >
                    <item.image className={`w-5 h-5 transition duration-300 text-white hover:text-[#624BC3] ${activeId === item.id ? "text-[#624BC3]" : "text-white"}`} />
                    <p>{item.name}</p>
                </Button>
            ))}
        </div>
    )
}