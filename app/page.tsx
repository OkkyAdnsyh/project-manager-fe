import { loginAuth } from "@/actions/auth/loginAuth";
import Login from "@/components/modules/Forms/Login";
import styles from "@/public/style/page.module.scss";

export default function Home() {
  return (
    <>
      <main className={styles.home}>
        <Login />
      </main>
    </>
  )
}
