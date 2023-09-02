import * as S from './Experience.styles';
import ReactImg from '../../assets/react-1.svg';
import Js from '../../assets/js-1.svg';
import Ts from '../../assets/ts-1.svg';

const Experience = () => {
	const dataAtual = new Date();
	const dataAnterior = new Date('2022-10-10T00:00:00.000Z');

	const meses =
		(dataAtual.getFullYear() - dataAnterior.getFullYear()) * 12 +
		(dataAtual.getMonth() - dataAnterior.getMonth());

	console.log(meses); // Output: 12

	return (
		<S.ExperienceContainer>
			<S.ExperienceDescription>
				<h3>Experience</h3>
				<p>
					{meses} months working as a Software Developer, in companys such as Jusfy
				</p>
			</S.ExperienceDescription>

			<S.ExperienceTime>
				<S.ExperienceTimeLife>
					<img src={ReactImg} />

					<S.TimeAll>
						<div className='time-today'>{meses} months</div>
					</S.TimeAll>
				</S.ExperienceTimeLife>
			</S.ExperienceTime>
			<S.ExperienceTime>
				<S.ExperienceTimeLife>
					<img src={Js} />
					<S.TimeAll>
						<div className='time-today'>{meses} months</div>
					</S.TimeAll>
				</S.ExperienceTimeLife>
			</S.ExperienceTime>
			<S.ExperienceTime>
				<S.ExperienceTimeLife>
					<img src={Ts} />
					<S.TimeAll>
						<div className='time-today ts'>{meses} months</div>
					</S.TimeAll>
				</S.ExperienceTimeLife>
			</S.ExperienceTime>
		</S.ExperienceContainer>
	);
};

export {Experience};
