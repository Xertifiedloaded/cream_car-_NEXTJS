import { Nav } from "@utils/Nav";
import close from "../../public/images/icon-close-menu.svg"
import Image from "next/image";
import styles from './sidebar.module.css'
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
                <div className={styles.sideContent}>
                  <Image src={content.icon} alt="logo" />
                  <li>
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
