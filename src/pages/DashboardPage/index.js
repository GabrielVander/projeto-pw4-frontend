import React from "react";
import './styles.css';
import DashboardMenu from "../../components/DashboardMenu";

function DashboardPage() {
    return (
        <>
            <header className='header'>
                <h2>
                    Dashboard
                </h2>
            </header>
            <DashboardMenu/>
        </>
    );
}

export default DashboardPage;