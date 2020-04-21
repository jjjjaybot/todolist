import React from 'react';
import {FaChevronDown, FaInbox, FaRegCalendarAlt, FaRegCalendar} from 'react-icons/fa';

function Sidebar() {
    return <div className="sidebar" data-testid="sidebar">
    <ul className="sidebar__generic">
        <li data-testid="inbox" className="inbox"><span><FaInbox /></span><span>Inbox</span></li>
        <li><span><FaRegCalendar /></span><span>Today</span></li>
        <li><span><FaRegCalendarAlt /></span><span>Next Week</span></li>
    </ul>

    <div className="sidebar__middle">
        <span><FaChevronDown /></span>
        <h2>Projects</h2>
    </div>

    <ul className="sidebar__projects">Projects here</ul>
    Add project component
    </div>;
  }
  
  export default Sidebar;

