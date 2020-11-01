import React from 'react';
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import StorefrontIcon from '@material-ui/icons/Storefront';
import { useStateValue } from './StateProvider';
import NotificationsIcon from '@material-ui/icons/Notifications';

function Sidebar() {

    const [{user}, dispatch] = useStateValue();
    return (
        <div className="sidebar">
          <SidebarRow src= {user.photoURL} alt="404"  title={user.displayName} />
         
          <SidebarRow
            Icon = {LocalHospitalIcon}  
            title = "COVID_20 Information Center" />
        
        <SidebarRow
            Icon = {HomeIcon}  
            title = "Home" />
        
        <SidebarRow
            Icon = {FlagIcon}  
            title = "Flag" />
        
        <SidebarRow
            Icon = {StorefrontIcon}  
            title = "Facebook Store" />
        <SidebarRow 
            Icon = {NotificationsIcon}
            title = "Notification" />
        
        
        </div>
    );
}

export default Sidebar
