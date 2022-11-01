import { useEffect, useState } from 'react'

import SearchTab from './SearchTab'
import HistoryTab from './HistoryTab'
import AttendanceTab from './AttendanceTab'

import styles from './styles.module.scss'

export const pacienteExample = [
    {
    name: "Gabriela Silva",
    srcImg: '',
    },
    {
    name: "Gabriel Lopes",
    srcImg: '',
    },
]

export function Content() {

    const [selectedTab, setSelectedTab] = useState(0);
    const [selected, setSelected] = useState(false);
    const [disabledTab, setDisabledTab] = useState(false)

    const handleClick = () => {
        setSelected(true)
        setSelectedTab(1);
    }

    useEffect(() => {
        renderTab(selectedTab)
    }, [selectedTab])

    const renderTab = (tab: number) => {
        switch (tab) {
            case 0:
                return <SearchTab handleClick={handleClick} disabledTab={disabledTab}/>
            case 1:
                return <HistoryTab />
            case 2:
                return <AttendanceTab/>

        }
    }

    return (
    <div className={styles.container}>
                <div className={styles.tabsSection}>
                    <button
                    className={ selectedTab === 0 ? styles.active : ''}
                    onClick={() => {
                        setDisabledTab(false)
                        setSelectedTab(0)
                        setSelected(false)
                        }
                    }>
                    Pesquisa
                    </button>
                    <button
                    className={ selectedTab === 1 ? styles.active : ''}
                    onClick={() => setDisabledTab(true)}>
                    Histórico Clínico
                    </button>
                    {selected ?                   
                    <button
                    className={ selectedTab === 2 ? styles.active : ''}
                    onClick={() => setSelectedTab(2)}>
                    Atendimentos
                    </button> : null}
                </div>


        {renderTab(selectedTab)}
    </div>
    )
}