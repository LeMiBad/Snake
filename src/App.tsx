import Header from './components/Header/Header';
import StartPage from './components/StartPage/StartPage';
import Level from './components/Level/Level';
import { Route, Routes } from 'react-router-dom';
import SettingPage from './components/SettingPage/SettingPage';

function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path={'/*'} element={<StartPage />}/>
				<Route path={'/game'} element={<Level />}/>
				<Route path={'/settings'} element={<SettingPage />}/>
			</Routes>
		</>
	)
}

export default App;
