import { DownOutlined } from '@ant-design/icons'
import type { MenuProps } from 'antd'
import { Button, Dropdown, Space } from 'antd'

const items: MenuProps['items'] = [
    {
        key: '2',
        label: 'sub menu',
        children: [
            {
                key: '2-1',
                label: '3rd menu item',
            },
            {
                key: '2-2',
                label: '4th menu item',
            },
        ],
    },
]

const MenuButton = () => {
    return (
        <Dropdown className="hidden lg:flex" menu={{ items }}>
            <Button>
                <a onClick={(e) => e.preventDefault()}>
                    <Space>
                        HCM Cinema
                        <DownOutlined />
                    </Space>
                </a>
            </Button>
        </Dropdown>
    )
}

export default MenuButton
