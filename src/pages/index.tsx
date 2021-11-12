import Image from 'next/image';

import styles from './home.module.scss';

export default function Home() {
	return (
		<div className={styles.container}>
			<nav className={styles.menu}>
				<ul>
					<li className={styles.active}>Tweets</li>
					<li>Tweets and Replies</li>
					<li>Médias</li>
				</ul>
			</nav>
			<div className={styles.post}>
				<Image
					src="/dante.png"
					width="50"
					height="50"
					alt="avatar"
					className={styles.avatar}
				/>
				<strong>
					Edson Fernandes
					<span> @edfer</span>
					<span> 26 jan.</span>
					<p> OI Galera</p>
				</strong>
			</div>
		</div>
	);
}
