import React, {useEffect, useState} from 'react';
import './styles.css';
import Header from "../Header";
import SideNav from "../SideNav";

const LayoutTemplate = ({headerTitle, children}) => {
    const [darkModeActived, setDarkModeActived] = useState(false);

    useEffect(() => {
        const root = document.documentElement;

        if (darkModeActived) {
            root.style.setProperty('--color-bg-main', '#000');
            root.style.setProperty('--color-bg-items', '#444');
            root.style.setProperty('--color-font-standard', '#FFF');
            root.style.setProperty('--color-font-feature', 'rgb(231, 212, 28)');
        } else {
            root.style.setProperty('--color-bg-main', '#CCC');
            root.style.setProperty('--color-bg-items', '#FFF');
            root.style.setProperty('--color-font-standard', '#000');
            root.style.setProperty('--color-font-feature', 'rgb(88, 90, 155)');
        }
    }, [darkModeActived]);

    return (
        <div className="LayoutTemplate">
            <Header darkModeActived={darkModeActived}
                    changeTheme={() => setDarkModeActived(!darkModeActived)}/>
            <SideNav/>
            <div className={"container template-content"}>
                {children}
            </div>
        </div>
    );
};

export default LayoutTemplate;