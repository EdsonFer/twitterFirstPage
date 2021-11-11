import styles from './styles.module.scss';
import { CgMoreVertical } from 'react-icons/cg';

export function Follows() {
	return (
		<div className={styles.container}>
			<ul className={styles.listMenu}>
				<li>
					<a href="#">Tweets</a>
					<label className={styles.active}>3931</label>
				</li>
				<li>
					<a href="#">Followings</a>
					<label>654</label>
				</li>
				<li>
					<a href="#">Followers</a>
					<label>387</label>
				</li>
				<li>
					<a href="#">Favorites</a>
					<label>265</label>
				</li>
				<li>
					<a href="#">Lists</a>
					<label>8</label>
				</li>
				<li>
					<a href="#">Moments</a>
					<label>0</label>
				</li>
			</ul>

			<div className={styles.buttons}>
				<button className={styles.buttonFollow}>Follow</button>

				<button className={styles.buttonMore}>
					<CgMoreVertical size="1.2rem" />
				</button>
			</div>
		</div>
	);
}
