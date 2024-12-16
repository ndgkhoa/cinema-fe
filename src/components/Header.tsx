import { MenuOutlined } from '@ant-design/icons'
import MenuButton from './MenuButton'
import type { MenuProps } from 'antd'
import { Button, Dropdown } from 'antd'
import logo from '../assets/logo.png'

const items: MenuProps['items'] = [
    {
        key: '1',
        label: (
            <a
                target="_blank"
                rel="noopener noreferrer"
                href="#"
                className="font-oswald"
            >
                LỊCH CHIẾU THEO RẠP
            </a>
        ),
    },
    {
        key: '2',
        label: (
            <a
                target="_blank"
                rel="noopener noreferrer"
                href="#"
                className="font-oswald"
            >
                PHIM
            </a>
        ),
    },
    {
        key: '3',
        label: (
            <a
                target="_blank"
                rel="noopener noreferrer"
                href="#"
                className="font-oswald"
            >
                RẠP
            </a>
        ),
    },
    {
        key: '4',
        label: (
            <a
                target="_blank"
                rel="noopener noreferrer"
                href="#"
                className="font-oswald"
            >
                GIÁ VÉ
            </a>
        ),
    },
    {
        key: '5',
        label: (
            <a
                target="_blank"
                rel="noopener noreferrer"
                href="#"
                className="font-oswald"
            >
                TIN MỚI VÀ ƯU ĐÃI
            </a>
        ),
    },
    {
        key: '6',
        label: (
            <a
                target="_blank"
                rel="noopener noreferrer"
                href="#"
                className="font-oswald"
            >
                NHƯỢNG QUYỀN
            </a>
        ),
    },
    {
        key: '7',
        label: (
            <a
                target="_blank"
                rel="noopener noreferrer"
                href="#"
                className="font-oswald"
            >
                THÀNH VIÊN
            </a>
        ),
    },
]

const Header = () => {
    return (
        <div className="sticky top-0 h-[70px] bg-white flex items-center z-[20]">
            <div className="w-full mx-4 md:mx-24 flex items-center justify-between gap-4">
                <img src={logo} alt="logo" width={150} />
                <MenuButton />
                <ul className="hidden sm:flex gap-6 font-semibold text-[12px] md:text-[14px] lg:text-[16px]">
                    <a className="hover:text-[#1EAEFC] cursor-pointer">
                        LỊCH CHIẾU THEO RẠP
                    </a>
                    <a className="hover:text-[#1EAEFC] cursor-pointer">PHIM</a>
                    <a className="hover:text-[#1EAEFC] cursor-pointer">RẠP</a>
                    <a className="hover:text-[#1EAEFC] cursor-pointer">
                        GIÁ VÉ
                    </a>
                    <a className="hover:text-[#1EAEFC] cursor-pointer">
                        TIN MỚI VÀ ƯU ĐÃI
                    </a>
                    <a className="hover:text-[#1EAEFC] cursor-pointer">
                        NHƯỢNG QUYỀN
                    </a>
                    <a className="hover:text-[#1EAEFC] cursor-pointer">
                        THÀNH VIÊN
                    </a>
                </ul>
                <Dropdown
                    className="sm:hidden"
                    menu={{ items }}
                    placement="bottomRight"
                >
                    <Button>
                        <MenuOutlined />
                    </Button>
                </Dropdown>
            </div>
        </div>
    )
}

export default Header
