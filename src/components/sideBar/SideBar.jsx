import close from "../../assets/images/icon-close-menu.svg";
import Image from "next/image";
import styles from "./sidebar.module.css";
import { Nav } from "@/utils/Nav";
export default function Sidebar({ handleSidebarClick }) {
  return (
    <>
      <aside className={`${styles.modal}`}>
        <div className={styles.imgContainer}>
          <Image src={close} alt="null" onClick={handleSidebarClick} />
        </div>
        <div className={styles.SideBar}>
          <ul>
            {Nav.map((content, index) => (
              <div className={styles.sideContent}>
                <Image src={content.icon} alt="logo" />
                <li key={index}>{content.content}</li>
              </div>
            ))}
          </ul>
        </div>
      </aside>
    </>
  );
}
