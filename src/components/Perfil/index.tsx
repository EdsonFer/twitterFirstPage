import Image from 'next/image';
import { GoLocation } from 'react-icons/go';
import { AiOutlineLink, AiOutlineClockCircle } from 'react-icons/ai';
import { FaBabyCarriage } from 'react-icons/fa';
import { BsPerson } from 'react-icons/bs';
import { MdPhotoSizeSelectActual } from 'react-icons/md';

import styles from './styles.module.scss';

export function Perfil() {
	return (
		<div className={styles.container}>
			<Image
				src="/dante.png"
				alt="avatar"
				width="200"
				height="200"
				className={styles.avatar}
			/>
			<strong className={styles.name}>Edson Fernandes</strong>
			<span className={styles.tag}>@edfer</span>

			<p>
				Web, Design & Rock n Roll Partner/UI Designer <span>@spade_be </span>
				Musician in <span>@dashboxmusic</span>
			</p>
			<br />

			<ul>
				<li>
					<GoLocation size="1rem" />
					Namur, Belgium
				</li>
				<li>
					<AiOutlineLink size="1.3rem" />
					<a href="#">exibit.be</a>
				</li>
				<li>
					<AiOutlineClockCircle size="1rem" />
					Joined June 2007
				</li>
				<li>
					<FaBabyCarriage size="1rem" />
					Born the 20th of June 1978
				</li>
			</ul>

			<p className={styles.followersKnow}>
				<div className={styles.ajuste}>
					<BsPerson size="1.2rem" />
					<span> 73 followers that you know</span>
				</div>

				<ul className={styles.peoples}>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
				</ul>
			</p>

			<p className={styles.followersKnow}>
				<div className={styles.ajuste}>
					<MdPhotoSizeSelectActual size="1.2rem" />
					<span> 266 Photos and videos</span>
				</div>

				<ul className={styles.pictures}>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
				</ul>
			</p>
		</div>
	);
}
