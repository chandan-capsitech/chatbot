import React, { useState } from 'react';
import {
    ProductOutlined,
    DesktopOutlined,
    FileOutlined,
    TeamOutlined,
    UserOutlined,
    BellFilled,
    SettingFilled
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import StatsCards from './StatsCards';

const { Content, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
    } as MenuItem;
}

const items: MenuItem[] = [
    getItem('Dashboard', '1', <ProductOutlined className='w-4.5 h-4.5' />),
    getItem('Chats', '2', <DesktopOutlined />),
    getItem('Tickets / Tasks', '3', <UserOutlined />),
    getItem('Team Members', '4', <TeamOutlined />),
    getItem('Teams', '5', <TeamOutlined />),
    getItem('Quick Replies', '6', <TeamOutlined />),
    getItem('Tax Class', '7', <TeamOutlined />),
    getItem('Discount / Coupons', '8', <FileOutlined />),
];

const DashboardLayout: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <div className='p-2'>
                <Sider trigger={null} collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}
                    breakpoint='lg'
                    style={{ background: colorBgContainer, minHeight: "100vh", width: "280px" }}
                    className='p-2 rounded-lg'
                >
                    <div className="demo-logo-vertica" />
                    <div className='text-transparent bg-clip-text bg-gradient-to-r from-[#A7BEFE] to-[#43319A] !comfortaa-custom text-center font-bold text-3xl p-2'>
                        RapidAssist
                    </div>
                    <Menu theme="light" defaultSelectedKeys={['1']} mode="inline" items={items} className='font-normal text-sm !figtree-custom' />
                </Sider>
            </div>
            <Layout>
                <Content style={{ margin: '0 16px' }}>
                    <div className='flex flex-row justify-between items-center'>
                        <Breadcrumb className='cursor-pointer !mt-4 !mb-4 !figtree-custom !font-semibold !text-xs md:!text-sm' items={[{ title: 'Home' }, { title: 'Dashboard' }]} />
                        <div className='flex items-center justify-center gap-2 sm:gap-4.5'>
                            <div className='flex items-center justify-center gap-0.5 sm:gap-1'>
                                <img src="user.png" className="h-5 w-5" alt="" />
                                <p className='font-normal text-xs md:text-sm'>Hi, Anthony</p>
                            </div>
                            <BellFilled className='h-5 w-5' />
                            <SettingFilled className='h-5 w-5' />
                        </div>
                    </div>
                    <div
                        style={{
                            padding: 24,
                            background: colorBgContainer,
                            borderRadius: borderRadiusLG,
                        }}
                    >
                        <StatsCards />
                    </div>
                </Content>
            </Layout>
        </Layout>
    );
};

export default DashboardLayout;