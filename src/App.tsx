import {Suspense} from "react";
import {Link, Route, Routes} from "react-router-dom";
import {MainPageAsync} from "./pages/Main/MainPage.async";
import {AboutPageAsync} from "./pages/About/AboutPage.async";
import {useTheme} from "./theme/useTheme";
import './styles/index.scss';
function App() {
    const {theme, toggleTheme} = useTheme();

    return <div className={`app ${theme}`}>
        <button onClick={toggleTheme}>TOGGLE</button>
        <Link to={'/'}>Главная</Link>
        <Link to={'/about'}>О сайте</Link>
        <Suspense fallback={<div>Загрузка...</div>}>
            <Routes>
                <Route path="/" element={<MainPageAsync/>}/>
                <Route path="/about" element={<AboutPageAsync/>}/>
            </Routes>
        </Suspense>
    </div>
}

export default App