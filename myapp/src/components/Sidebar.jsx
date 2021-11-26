import React from 'react'
import "./Sidebar.css"
import LineStyleIcon from '@mui/icons-material/LineStyle';
import TimelineIcon from '@mui/icons-material/Timeline';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PersonIcon from '@mui/icons-material/Person';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import PaidIcon from '@mui/icons-material/Paid';
import EmailIcon from '@mui/icons-material/Email';
import FeedbackIcon from '@mui/icons-material/Feedback';
import MessageIcon from '@mui/icons-material/Message';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import ReportIcon from '@mui/icons-material/Report';

function Sidebar() {
    return (
        <div className="sidebar">
           <div className="sidebarwrapper">
               <div className="sidebarMenu">
                   <h3 className="sidebarTitle">DashBoard</h3>
                   <ul className="sidebarList">
                       <li className="sidebarListItem active"><LineStyleIcon className="sidebarIcon"/>
                       Home</li>
                       <li className="sidebarListItem"><TimelineIcon/>
                       Analytics</li>
                       <li className="sidebarListItem"><TrendingUpIcon/>
                       Sales</li>
                   </ul>
               </div>
               <div className="sidebarMenu">
                   <h3 className="sidebarTitle">Quick Menu</h3>
                   <ul className="sidebarList">
                       <li className="sidebarListItem active"><PersonIcon className="sidebarIcon"/>
                       Users</li>
                       <li className="sidebarListItem"><Inventory2Icon/>
                       Products</li>
                       <li className="sidebarListItem"><PaidIcon/>
                       Transactions</li>
                   </ul>
               </div>
               <div className="sidebarMenu">
                   <h3 className="sidebarTitle">Notifications</h3>
                   <ul className="sidebarList">
                       <li className="sidebarListItem active"><EmailIcon className="sidebarIcon"/>
                       Mail</li>
                       <li className="sidebarListItem"><FeedbackIcon/>
                       Feedback</li>
                       <li className="sidebarListItem"><MessageIcon/>
                      Messages</li>
                   </ul>
               </div>
               <div className="sidebarMenu">
                   <h3 className="sidebarTitle">Staff</h3>
                   <ul className="sidebarList">
                       <li className="sidebarListItem active"><ManageAccountsIcon className="sidebarIcon"/>
                       Manage</li>
                       <li className="sidebarListItem"><TimelineIcon/>
                       Analytics</li>
                       <li className="sidebarListItem"><ReportIcon/>
                       Reports</li>
                   </ul>
               </div>
           </div>
        </div>
    )
}

export default Sidebar
