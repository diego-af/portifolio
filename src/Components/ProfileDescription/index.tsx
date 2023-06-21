import * as S from './ProfileDescription.styles';
import Br from '../../assets/🇧🇷.svg';
import Us from '../../assets/🇺🇸.svg';
export default function ProfileDescription() {
	return (
		<S.ContainerProfile>
			<S.TitleLanguages>Languages</S.TitleLanguages>
			<S.Languages>
				<img src={Us} />
				<span>EN Learning</span>
			</S.Languages>
			<S.Languages>
				<img src={Br} />
				<span>PT-BR Native Speaker</span>
			</S.Languages>

			<S.TitleEducation>Education</S.TitleEducation>
			<S.Education>
				<span> - Technologist in Systems Analysis and Development</span>
			</S.Education>
		</S.ContainerProfile>
	);
}
