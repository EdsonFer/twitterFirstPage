import styles from './styles.module.scss';

import Image from 'next/image';

import { RiHome8Line } from 'react-icons/ri';
import { BsBell, BsTwitter } from 'react-icons/bs';
import { AiOutlineMail, AiOutlineSearch } from 'react-icons/ai';

export function Header() {
	return (
		<div className={styles.header}>
			<nav className={styles.leftMenu}>
				<a href="#">
					<RiHome8Line size="1.5rem" />
					Home
				</a>
				<a href="#">
					<BsBell size="1.5rem" />
					Notifications
				</a>
				<a href="#">
					<AiOutlineMail size="1.5rem" />
					Messages
				</a>
			</nav>

			<BsTwitter color="#3bb9e3" size="1.8rem" className={styles.twitter} />

			<div className={styles.rightMenu}>
				<div className={styles.search}>
					<input
						type="text"
						className={styles.inputSearch}
						placeholder="Search on Twitter"
					/>
					<AiOutlineSearch className={styles.iconSearch} />
				</div>

				<Image
					src="/dante.png"
					alt="avatar"
					width="40"
					height="40"
					className={styles.avatar}
				/>

				<button type="button" className={styles.button}>
					Tweet
				</button>
			</div>
		</div>
	);
}
