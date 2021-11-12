import styles from './styles.module.scss';

export function RightMenu() {
	return (
		<div className={styles.container}>
			<div className={styles.infos}>
				<p>Who to follow </p>
				<span className={styles.circle}>Refresh</span>
				<span className={styles.circle}>View all</span>
			</div>

			<div className={styles.follow}>
				<div className={styles.avatar} />
				<div className={styles.dados}>
					<strong>
						Spade
						<span> @spade_be</span>
					</strong>
					<button>Follow</button>
				</div>
			</div>

			<div className={styles.follow}>
				<div className={styles.avatar} />
				<div className={styles.dados}>
					<strong>
						Spade
						<span> @spade_be</span>
					</strong>
					<button>Follow</button>
				</div>
			</div>

			<div className={styles.follow}>
				<div className={styles.avatar} />
				<div className={styles.dados}>
					<strong>
						Spade
						<span> @spade_be</span>
					</strong>
					<button>Follow</button>
				</div>
			</div>

			<div className={styles.follow}>
				<div className={styles.avatar} />
				<div className={styles.dados}>
					<strong>
						Spade
						<span> @spade_be</span>
					</strong>
					<button>Follow</button>
				</div>
			</div>

			<div className={styles.trends}>
				<div className={styles.infos}>
					<p>Trends </p>
					<span className={styles.circle}>Change</span>
				</div>

				<ul>
					<li>#SportInfoDay</li>
					<li>#womenleaders</li>
					<li>#UX design</li>
					<li>#UI Design</li>
					<li>#CleanAirNow</li>
				</ul>
			</div>
		</div>
	);
}
