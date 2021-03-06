import React from 'react'
import { Card, Icon, Avatar } from 'antd';

const { Meta } = Card;

function MenuCard() {
    return (
        <div>
            <Card
                style={{ width: 300 }}
                cover={
                    <img
                        alt="example"
                        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                    />
                }
                actions={[
                    <Icon type="plus" key="add" />,
                    <Icon type="edit" key="edit" />,
                    <Icon type="delete" key="delete" />,
                ]}
            >
                <Meta
                    avatar={<Avatar src="" />}
                    title="Card title"
                    description="This is the description"
                />
            </Card>
        </div>
    )
}

export default MenuCard


