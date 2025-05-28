import { Route } from "react-router-dom";
import { Menu } from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined, PieChartOutlined, SearchOutlined } from '@ant-design/icons';

// export const CyberbugsTemplate = (props) => {
//     const { Component, ...restParam } = props;

//     return <Route {...restParam} render={(propsRoute) => {
//         return <>
//             <div style={{
//                 height: "100vh",
//                 backgroundColor: "rgb(7, 71, 166)",
//                 width: "100"
//             }} >
//             </div>
//             <Component {...propsRoute} />
//         </>
//     }} />
// }

const items: MenuItem[] = [
    {
        key: 'sub1',
        label: 'Navigation One',
        icon: <MailOutlined />,
        children: [
            {
                key: 'g1',
                label: 'Item 1',
                type: 'group',
                children: [
                    { key: '1', label: 'Option 1' },
                    { key: '2', label: 'Option 2' },
                ],
            },
            {
                key: 'g2',
                label: 'Item 2',
                type: 'group',
                children: [
                    { key: '3', label: 'Option 3' },
                    { key: '4', label: 'Option 4' },
                ],
            },
        ],
    },
    {
        key: 'sub2',
        label: 'Navigation Two',
        icon: <AppstoreOutlined />,
        children: [
            { key: '5', label: 'Option 5' },
            { key: '6', label: 'Option 6' },
            {
                key: 'sub3',
                label: 'Submenu',
                children: [
                    { key: '7', label: 'Option 7' },
                    { key: '8', label: 'Option 8' },
                ],
            },
        ],
    },
    {
        type: 'divider',
    },
    {
        key: 'sub4',
        label: 'Navigation Three',
        icon: <SettingOutlined />,
        children: [
            { key: '9', label: 'Option 9' },
            { key: '10', label: 'Option 10' },
            { key: '11', label: 'Option 11' },
            { key: '12', label: 'Option 12' },
        ],
    },
    {
        key: 'grp',
        label: 'Group',
        type: 'group',
        children: [
            { key: '13', label: 'Option 13' },
            { key: '14', label: 'Option 14' },
        ],
    },
];

export const CyberbugsTemplate = ({ children }) => {

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
                style={{ width: 256, paddingTop: "20px" }}
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
                items={items}
            />
            <div style={{ flex: 1, paddingTop: "20px", paddingLeft: "10px" }}>
                {children}
            </div>
        </div>
    </>
}