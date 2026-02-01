import { SidebarItemsProps } from "./Sidebar.type"
import './Sidebar.css';

const SidebarItem = ({name, img} : SidebarItemsProps ) => {

    return (       
            <a href="#" className="item__link">
                <img src={`${img}`} alt="Item icon" className="item__icon" />
                <p className="item-name">{name}</p>
            </a>    

    )
}


const Sidebar = () => {

    const SidebarItems: SidebarItemsProps[] = [
        {name:'Overview ', img:'./public/profile-image.png'},
        {name:'Transactions ', img:'./public/profile-image.png'},
        {name:'Cards ', img:'./public/profile-image.png'},
        {name:'Invoices ', img:'./public/profile-image.png'},
        {name:'Goals', img:'./public/profile-image.png'},
        {name:'Settings', img:'./public/profile-image.png'},
    ]

    return (
        <div className="sidebar-container">

            <img src="./public/cloud-cash.png" alt="Sidebar Icon" className="sidebar__icon" />

            <div className="sidebar__links-container">
                {SidebarItems.map((item, index) => (
                    <SidebarItem
                        key={index}
                        name={item.name}
                        img={item.img}
                    />
                ))}
            </div>
        </div>)
}

export default Sidebar;