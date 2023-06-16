import {RouteProps} from "react-router-dom";
import {MainPage} from "pages/Main";
import {AboutPage} from "pages/About";

export enum AppRoutes {
    MAIN = 'main',
    ABOUT ='about',
}
export const RourePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN] : '/',
    [AppRoutes.ABOUT] : '/about',
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RourePath.main,
        element: <MainPage />
    },
    [AppRoutes.ABOUT]: {
        path: RourePath.about,
        element: <AboutPage />
    }
}