
import close from "../../assets/images/icon-close-menu.svg"
import Image from "next/image";
import styles from './sidebar.module.css'
import { Nav } from "@/utils/Nav";
export default function Sidebar({ toggleSideBar, SideBar }) {

  return (
    <>
      <aside  className={styles.main}>
        <div className={styles.imgContainer}>
          <Image src={close} alt="null" onClick={toggleSideBar}  />
        </div>
        <div className={styles.SideBar}>
          <ul>
            {
              Nav.map((content, index) => (
                <div className={styles.sideContent} onClick={toggleSideBar}>
                  <Image src={content.icon} alt="logo" />
                  <li key={index}>
                    {content.content}
                  </li>
                </div>
              ))
            }
          </ul>
        </div>
      </aside>
    </>
  );
}
