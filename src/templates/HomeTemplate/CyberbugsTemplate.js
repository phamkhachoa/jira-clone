import { Route } from "react-router-dom";
import { Menu, MenuItem } from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined, PieChartOutlined, SearchOutlined } from '@ant-design/icons';
import { useNavigate } from "react-router";

const items: MenuItem[] = [
    {
        key: '/home',
        label: 'Trang chủ',
    },
    {
        key: 'sub1',
        label: 'Projects Management',
        icon: <MailOutlined />,
        children: [
            {
                key: "/createProject",
                label: 'Tạo mới Project',
                routePath: "/createProject"
            }, {
                key: "/listProject",
                label: 'Danh sách Project',
                route: "/listProject"
            },
            {
                key: "/home",
                label: 'Danh sách Project',
                route: "/listProject"
            }
        ],
    }
];

export const CyberbugsTemplate = ({ children }) => {

    let navigate = useNavigate();

    const onClick = (props) => {
        console.log(props); // This will now log the route
        navigate(props.key); // Navigate to the route
    }

    return <>
        <div style={{ display: "flex" }}>
            <div style={{
                height: "100vh",
                backgroundColor: "rgb(7, 71, 166)",
                width: "80px",
                paddingTop: "20px"
            }} >
                <PieChartOutlined style={{ fontSize: "40px", display: "block", color: "white" }} />
                <SearchOutlined style={{ fontSize: "40px", display: "block", paddingTop: "20px", color: "white" }} />
            </div>
            <Menu
                onClick={onClick}
                style={{ width: 256, paddingTop: "20px" }}
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['/createProject']}
                mode="inline"
                items={items}
            />
            <div style={{ flex: 1, paddingTop: "20px", paddingLeft: "10px" }}>
                {children}
            </div>
        </div>
    </>
}