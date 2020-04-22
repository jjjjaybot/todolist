import React, { useState } from 'react';
import {FaPizzaSlice} from 'react-icons/fa';
import { AddTask } from '../AddTask';


export const Header = ({darkMode, setDarkMode}) => {
    const [shouldShowMain, setShouldMain] = useState(false);
    const [showQuickAddTask, setShowQuickAddTask] = useState(false);


    return <header className="header" data-testid="header">
        <nav>
            <div className="logo">
                <img src="/images/tdlogo.png" alt="logo"/>
            </div>
            <div className="settings">
                <ul>
                    <li data-testid="quick-add-task-action" className="settings__add"
                    >
                    <button
                        aria-label="Quick Add Task" 
                        onClick={() => {setShowQuickAddTask(true); setShouldMain(true);}}
                        type="button"
                        onKeyDown={() => {setShowQuickAddTask(true); setShouldMain(true);}}
                    >
                        +
                    </button>
                    </li>
                    <li data-testid="dark-mode-action" 
                        className="settings__darkmode"
                    >
                    <button 
                        type="button"
                        aria-label="Dark mode on/off"
                        onClick={() => {setDarkMode(!darkMode)}}
                        onKeyDown={() => {setDarkMode(!darkMode)}}
                        >
                        <FaPizzaSlice color="orange"/>
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
        <AddTask 
            showAddTaskMain={false}
            shouldShowMain={shouldShowMain}
            showQuickAddTask={showQuickAddTask}
            setShowQuickAddTask={setShowQuickAddTask}
        />
    </header>

}