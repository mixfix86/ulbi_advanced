import {classNames} from "shared/classNames/classNames";
import {useTheme} from "app/providers/ThemeProvider";
import './styles/index.scss';
import {AppRouter} from "app/providers/router";
import {Navbar} from "widgets/navbar";

function App() {
    const {theme, toggleTheme} = useTheme();

    return <div className={classNames('app', {}, [theme])}>
        <Navbar/>
        <AppRouter/>
        <button onClick={toggleTheme}>TOGGLE</button>
    </div>
}

export default App