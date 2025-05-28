import React from 'react';
import styles from './Home.module.css';
import { SearchOutlined } from '@ant-design/icons';
import { Tabs, Card } from 'antd';

export default function Home() {
    return (
        <>
            {/* path Router  */}

            <div> Menu 1 / Menu 2 / Menu 3</div>

            <h2>Kanban board</h2>

            {/* board filter  */}
            <div className={styles.lineSearch}>
                <div className={styles.searchContainer}>
                    <SearchOutlined style={{ fontSize: "20px" }} /> <input type="text" className={styles.searchInput} placeholder="Search..." />
                </div>

                <div className={styles.avatarRow}>
                    <img src="https://sm.ign.com/ign_nordic/cover/a/avatar-gen/avatar-generations_prsz.jpg" className={styles.avatar} alt="avatar 1" />
                    <img src="https://sm.ign.com/ign_nordic/cover/a/avatar-gen/avatar-generations_prsz.jpg" className={styles.avatar} alt="avatar 2" />
                    <img src="https://sm.ign.com/ign_nordic/cover/a/avatar-gen/avatar-generations_prsz.jpg" className={styles.avatar} alt="avatar 3" />
                </div>

                {/* <Tabs
                    defaultActiveKey="1"
                    type="card"
                    style={{ marginBottom: 32 }}
                    items={Array.from({ length: 3 }).map((_, i) => {
                        const id = String(i + 1);
                        return {
                            label: `Card Tab ${id}`,
                            key: id,
                            children: `Content of card tab ${id}`,
                        };
                    })}
                /> */}

            </div>

            {/* body */}
            <div className={styles.groups}>
                <div className={styles.group}>
                    <h3 style={{ textAlign: 'center', color: "gray" }}>BACK LOG</h3>
                    <Card title="Card title" variant="borderless" style={{ margin: 5 }}>
                        Card content
                    </Card>

                    <Card title="Card title" variant="borderless" style={{ margin: 5 }}>
                        Card content
                    </Card>

                    <Card title="Card title" variant="borderless" style={{ margin: 5 }}>
                        Card content
                    </Card>

                    <Card title="Card title" variant="borderless" style={{ margin: 5 }}>
                        Card content
                    </Card>

                    <Card title="Card title" variant="borderless" style={{ margin: 5 }}>
                        Card content
                    </Card>

                    <Card title="Card title" variant="borderless" style={{ margin: 5 }}>
                        Card content
                    </Card>
                </div>

                <div className={styles.group}>
                    <h3 style={{ textAlign: 'center', color: "gray" }}>TO DO</h3>
                    <Card title="Card title" variant="borderless" style={{ margin: 5 }}>
                        Card content
                    </Card>
                </div>

                <div className={styles.group}>
                    <h3 style={{ textAlign: 'center', color: "gray" }}>PROCESSING</h3>
                    <Card title="Card title" variant="borderless" style={{ margin: 5 }}>
                        Card content
                    </Card>
                </div>

                <div className={styles.group}>
                    <h3 style={{ textAlign: 'center', color: "gray" }}>DONE</h3>
                    <Card title="Card title" variant="borderless" style={{ margin: 5 }}>
                        Card content
                    </Card>
                </div>
            </div>
        </>
    )
}
