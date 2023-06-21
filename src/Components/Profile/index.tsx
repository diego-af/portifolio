import * as S from './Profile.styles';
import Github from '../../assets/github.svg';
import Twitter from '../../assets/twitter.svg';
import instagram from '../../assets/instagram.svg';
import Linkedin from '../../assets/linkedin.svg';
import Email from '../../assets/email.svg';
import ProfileImg from '../../assets/profile.png';
export default function Profile() {
	return (
		<S.Profile>
			<S.TitleContainer>
				<div>
					<S.Image src={ProfileImg} />
				</div>
				<div>
					<h3>Hi, I`m Diego Alves 💻</h3>
					<p>Software Developer</p>
				</div>
			</S.TitleContainer>

			<S.MediasContent>
				<S.BoxIcon href='https://instagram.com/dyeegoalves'>
					<img src={instagram} />
				</S.BoxIcon>
				<S.BoxIcon href='https://www.linkedin.com/in/diego-alves-a903b81a4/'>
					<img src={Linkedin} />
				</S.BoxIcon>
				<S.BoxIcon href='https://github.com/diego-af'>
					<img src={Github} />
				</S.BoxIcon>
				<S.BoxIcon href='https://twitter.com/Alvees_10'>
					<img src={Twitter} />
				</S.BoxIcon>
			</S.MediasContent>

			<S.ButtonContact href='https://mail.google.com/'>
				<span>Contact Me </span>
				<img src={Email} />
			</S.ButtonContact>
		</S.Profile>
	);
}
