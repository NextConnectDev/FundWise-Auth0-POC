import { auth0 } from "@/lib/auth0";
import styles from "./page.module.css";

export default async function Home() {
  const session = await auth0.getSession();

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.ctas}>
          {!!session
            ? <p>Logged in as {session.user.email}</p>
            : <a href="/auth/login" className={styles.primary}>Log in with Auth0</a>
          }
        </div>
      </main>
    </div>
  );
}
