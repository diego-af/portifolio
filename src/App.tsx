import {Experience} from './Components/Experience';
import Profile from './Components/Profile';
import ProfileDescription from './Components/ProfileDescription';
import * as S from './App.styles';

function App() {
	return (
		<>
			<S.Container>
				<div>
					<Profile />
					<Experience />
				</div>
				<div>
					<ProfileDescription />
				</div>
			</S.Container>
		</>
	);
}

export default App;
