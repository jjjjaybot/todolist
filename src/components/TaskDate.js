import React from 'react';
import { FaSpaceShuttle, FaSun, FaRegPaperPlane } from 'react-icons/fa';
import moment from 'moment';

export const TaskDate = ({setTaskDate, showTaskDate, setShowTaskDate}) => 
    showTaskDate && (
        <div className="task-date" data-testid="task-date-overlay">
            <ul className="task-date__list">
                <li
                data-testid="task-date-overlay"
                >
                <div onClick={() => {
                    setShowTaskDate(false);
                    setTaskDate(moment().format('DD/MM/YYYY'));}}
                    onKeyDown={() => {
                    setShowTaskDate(false);
                    setTaskDate(moment().format('DD/MM/YYYY'));}}
                    tabIndex={0}
                    role="button"
                    aria-label="Select today"
                    >
                    <span>
                        <FaSpaceShuttle />
                    </span>
                    <span>Today</span>
                    </div>
                </li>
                <li
                data-testid="task-date-tomorrow"
                >
                <div
                onClick={() => {
                    setShowTaskDate(false);
                    setTaskDate(moment().add(1, 'day').format('DD/MM/YYYY'));
                }}
                onKeyDown={() => {
                    setShowTaskDate(false);
                    setTaskDate(moment().add(1, 'day').format('DD/MM/YYYY'));
                }}
                tabIndex={0}
                role="button"
                aria-label="Select tomorrow"
                >
                    <span>
                        <FaSun />
                    </span>
                    <span>Tomorrow</span>
                </div>
                </li>
                <li
                data-testid="task-date-next-week"
                >
                <div
                onClick={() => {
                    setShowTaskDate(false);
                    setTaskDate(moment().add(7, 'days').format('DD/MM/YYYY'));
                }}
                onKeyDown={() => {
                    setShowTaskDate(false);
                    setTaskDate(moment().add(7, 'days').format('DD/MM/YYYY'));
                }}
                tabIndex={0}
                role="button"
                aria-label="Select next week"
                >
                    <span>
                        <FaRegPaperPlane />
                    </span>
                    <span>Next Week</span>
                </div>
                </li>
            </ul>
        </div>
    );