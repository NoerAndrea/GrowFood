import { Fragment } from "react/jsx-runtime";
import { AppRoutes } from "./config/routes/AppRoutes";
import { GlobalStyles } from "./config/global/GlobalStyles";

export function App(){
    return (
        <Fragment>
            <GlobalStyles/>
            <AppRoutes/>
        </Fragment>
    )
}