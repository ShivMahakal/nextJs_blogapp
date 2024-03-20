import Link from "next/link";
import styles from "./links.module.css";
import NavLink from "../navLink/navLink";

const Links = () => {
  const links = [
    {
      id: 1,
      title: "Homepage",
      path: "/",
    },
    {
      id: 2,
      title: "About",
      path: "/about",
    },
    {
      id: 3,
      title: "Contact",
      path: "/contact",
    },
    {
      id: 4,
      title: "Blog",
      path: "/blog",
    },
  ];

  const session = false;
  const isAdmin = false;

  return (
    <div className={styles.links}>
      {links?.map((link) => {
        return <NavLink item={link} key={link.id} />;
      })}
      {session ? (
        <>
        {isAdmin && (
            <NavLink item={{ title: "Admin", path: "/admin" }} />
        )}
         <button className={styles.logout}>Logout</button>
         </>
      ):(
        <NavLink item={{title:"Login", path:"/login"}} />
      )}
    </div>
  );
};

export default Links;
