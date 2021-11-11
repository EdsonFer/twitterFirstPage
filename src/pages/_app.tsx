import '../styles/globals.scss';
import styles from '../styles/app.module.scss';
import { Header } from '../components/Header';
import { Banner } from '../components/Banner';
import { Follows } from '../components/Follows';

function MyApp({ Component, pageProps }) {
	return (
		<div className={styles.container}>
			<div className={styles.header}>
				<Header />
			</div>

			<div className={styles.banner}>
				<Banner />
			</div>

			<div className={styles.listMenu}>
				<Follows />
			</div>

			<div className={styles.content}>
				<div className={styles.perfil}></div>

				<Component {...pageProps} />

				<div className={styles.rightMenu}></div>
			</div>
		</div>
	);
}

export default MyApp;
