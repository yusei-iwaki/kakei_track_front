import { FC } from "react";
import styles from "./index.module.scss";
import Image from "next/image";
import { SideBarTypes } from "@/types/type_side_bar";
import Link from "next/link";
import { usePathname } from "next/navigation";

const sideBarFeatureItems: SideBarTypes[] = [
  {
    type: "entry",
    href: "/member/entry/income",
    src: "/images/icon/entry.png",
    alt: "入力ページ",
    text: "収支入力",
  },
  {
    type: "record",
    href: "/member/records/income",
    src: "/images/icon/record.png",
    alt: "グラフ表示ページ",
    text: "家計簿グラフ",
  },
  {
    type: "setting",
    href: "/member/setting",
    src: "/images/icon/setting.png",
    alt: "設定ページ",
    text: "設定",
  },
  {
    type: "logout",
    href: "#",
    src: "/images/icon/logout.png",
    alt: "ログアウトページ",
    text: "ログアウト",
  },
];

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const HeaderSidebar: FC<SidebarProps> = ({ isOpen, onClose }) => {
  const pathname = usePathname();
  return (
    <div
      className={`${styles.overlay} ${isOpen ? styles.open : ""}`}
      onClick={onClose}
    >
      <div className={styles.sidebar} onClick={(e) => e.stopPropagation()}>
        <Image
          src="/images/icon/close.png"
          alt="閉じるボタン"
          width={30}
          height={30}
          onClick={onClose}
          className={styles.close_button}
        />
        <div className={styles.link}>
          {sideBarFeatureItems.map((item) => (
            <Link href={item.href} key={item.href} onClick={onClose}>
              <div
                className={`${styles.link_item} ${
                  pathname.includes(item.type) ? styles.active : ""
                }`}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={30}
                  height={30}
                  className={styles.icon}
                />
                {item.text}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeaderSidebar;
