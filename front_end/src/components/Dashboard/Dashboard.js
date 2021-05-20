import React from 'react';
import ProjectList from '../Projects/ProjectList';
import Notiifications from './Notifications';

const Dashboard = () => {
    
        return (
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        <ProjectList /> 
                    </div>
                    <div className="col s12 m5 offset-m1">
                        <Notiifications />
                    </div>
                </div>
            </div>
        );
    }


export default Dashboard;