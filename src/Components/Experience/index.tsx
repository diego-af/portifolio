import * as S from './Experience.styles';
import ReactImg from '../../assets/react-1.svg';
import Js from '../../assets/js-1.svg';
import Ts from '../../assets/ts-1.svg';

const Experience = () => {
	return (
		<S.ExperienceContainer>
			<S.ExperienceDescription>
				<h3>Experience</h3>
				<p>
					10 months working as a Software Developer, in companys such as Jusfy
				</p>
			</S.ExperienceDescription>

			<S.ExperienceTime>
				<S.ExperienceTimeLife>
					<img src={ReactImg} />

					<S.TimeAll>
						<div className='time-today'>10 months</div>
					</S.TimeAll>
				</S.ExperienceTimeLife>
			</S.ExperienceTime>
			<S.ExperienceTime>
				<S.ExperienceTimeLife>
					<img src={Js} />
					<S.TimeAll>
						<div className='time-today'>10 months</div>
					</S.TimeAll>
				</S.ExperienceTimeLife>
			</S.ExperienceTime>
			<S.ExperienceTime>
				<S.ExperienceTimeLife>
					<img src={Ts} />
					<S.TimeAll>
						<div className='time-today ts'>4 months</div>
					</S.TimeAll>
				</S.ExperienceTimeLife>
			</S.ExperienceTime>
		</S.ExperienceContainer>
	);
};

export {Experience};
