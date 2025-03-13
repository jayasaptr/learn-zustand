import HalamanIcon from "@/components/icons/HalamanIcon";
import JuzIcon from "@/components/icons/JuzIcon";
import SurahIcon from "@/components/icons/SurahIcon";
import { ListItem } from "@/types/ListItem";

export const listType: ListItem[] = [
  {
    id: 0,
    name: "Surat",
    image: SurahIcon,
  },
  {
    id: 1,
    name: "Juz",
    image: JuzIcon,
  },
  {
    id: 2,
    name: "Halaman",
    image: HalamanIcon,
  },
];

export const surah = ["Al-Baqarah", "Al-Kahfi", "Yasin", "Al-Mulk"];
