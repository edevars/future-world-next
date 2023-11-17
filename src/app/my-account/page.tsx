import styles from './MyAccount.module.sass'

export const dynamic = 'force-dynamic'

export default async function MyAccountPage() {
  return (
    <div>
      <h1 className={styles.MyAccount__title}>My Account</h1>
    </div>
  );
}