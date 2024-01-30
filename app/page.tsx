import Image from "next/image";
import Login from "@/components/modules/Forms/Login";
import styles from "@/public/style/page.module.scss";
import logo from "@/public/img/logo-green.png"
import Link from "next/link";

export default function UserLogin(){
  return (
    <>
      <main className={styles.home}>
        <section className={styles.login}>
          <article className={styles['login-article']}>
          <svg className={styles['blob-1']} width="232" height="182" viewBox="0 0 599 572" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M290.121 66.3514C358.228 60.7468 415.953 -17.5378 480.932 3.6183C543.533 24 571.246 100.554 589.476 163.815C606.293 222.173 597.002 284.154 578.439 341.98C561.938 393.38 526.325 433.787 489.992 473.715C454.501 512.719 422.327 568.718 369.662 571.415C315.741 574.176 278.704 519.05 235.442 486.748C206.701 465.289 189.456 433.097 159.011 414.134C109.297 383.17 22.9928 396.809 2.78343 341.839C-15.7347 291.469 63.5112 255.892 82.3617 205.645C103.388 149.598 68.7587 66.7807 118.479 33.4453C167.867 0.333263 230.861 71.2281 290.121 66.3514Z" fill="url(#paint0_linear_25_39)"/>
            <defs>
            <linearGradient id="paint0_linear_25_39" x1="299.137" y1="0" x2="299.137" y2="571.515" gradientUnits="userSpaceOnUse">
            <stop stopColor="#4EED27"/>
            <stop offset="1" stopColor="#A7FF91"/>
            </linearGradient>
            </defs>
          </svg>
            <Image className={styles.logo} src={logo} alt='logo' width={148} height={148}/>
            <h1>CHECK WHAT'S GOING ON WITH YOUR PROJECT</h1>
          </article>
          <section className={styles['login-input-group']}>
            <article className={styles['title-group']}>
              <h1>Login</h1>
              <p>Check progress of your project or start new project through dashboard</p>
            </article>
            <Login/>
            <Link href={'/user-register'} className={styles['footer']}>
              Don't have an account ? <span>Sign Up Here</span>
            </Link>
          </section>
        </section>
      </main>
    </>
  )
}
