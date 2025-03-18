import JuzIcon from "@/components/icons/JuzIcon";
import SurahIcon from "@/components/icons/SurahIcon";
import { ListItem } from "@/types/ListItem";
import { ListSosmed } from "@/types/Sosmed";
import LinkedInd from "@/assets/linkedin.svg";
import Facebook from "@/assets/facebook.svg";
import Instagram from "@/assets/instagram.svg";
import X from "@/assets/x.svg";

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
];

export const surah = ["Al-Baqarah", "Al-Kahfi", "Yasin", "Al-Mulk"];

export const listSosme: ListSosmed[] = [
  {
    id: 0,
    name: "LinkedIn",
    image: LinkedInd,
  },
  {
    id: 1,
    name: "Facebook",
    image: Facebook,
  },
  {
    id: 2,
    name: "Instagram",
    image: Instagram,
  },
  {
    id: 3,
    name: "X",
    image: X,
  },
];
