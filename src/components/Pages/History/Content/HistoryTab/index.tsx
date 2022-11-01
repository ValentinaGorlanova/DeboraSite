import { useState, useEffect } from 'react';

import { FaPrint } from 'react-icons/fa'
import { TfiReload } from 'react-icons/tfi'

import MainDataTab from './Components/MainDataTab';
import ReasonsTab from './Components/ReasonsTab';
import HistyryContentTab from './Components/HistyryContentTab';
import LifeStyleTab from './Components/LifeStyleTab';
import BadHabitsTab from './Components/BadHabitsTab';
import PsyHistoryTab from './Components/PsyHistoryTab';
import OtherInfoTab from './Components/OtherInfoTab';
import HipothesesTab from './Components/HipothesesTab';
import StrategyTab from './Components/StrategyTab';
import SignatureTab from './Components/SignatureTab';

import styles from './styles.module.scss'

export default function HistoryTab() {

    const [selectedTab, setSelectedTab] = useState(0);

    const tabs = [
        "Dados principais",
        "Motivos",
        "História",
        "Alimentação, sono, atv. física",
        "Consumo de alcool e outras drogas",
        "Histórico Psiq.",
        "Outras Info.",
        "Hipóteses",
        "Estratégia",
        "Assinatura"
    ]

    useEffect(() => {
        renderTabContent(selectedTab)
    }, [selectedTab])

    const renderTabContent = (tab: number) => {
        switch (tab) {
            case 0:
                return <MainDataTab />
            case 1:
                return <ReasonsTab />
            case 2:
                return <HistyryContentTab/>
            case 3:
                return <LifeStyleTab />
            case 4:
                return <BadHabitsTab />
            case 5:
                return <PsyHistoryTab/>
            case 6:
                return <OtherInfoTab />
            case 7:
                return <HipothesesTab />
            case 8:
                return <StrategyTab/>
            case 9:
                return <SignatureTab/>


        }
    }

    return (
        <>
        <div className={styles.container}>
            <div className={styles.side_btns_container}>
                <div>
                    <button className={styles.side_btn}>
                        <TfiReload size={"20px"} strokeWidth={1}  stroke={'#273a51'}/>
                    </button>
                    <p>Atualizar</p>
                </div>
                <div>
                    <button className={styles.side_btn}>
                        <FaPrint size={"20px"}  fill={'#273a51'}/>
                    </button>
                    <p>Imprimir</p>
                </div>
            </div>
        
            <div className={styles.tabsSection}>
                {tabs.map((tab, i) => {
                    return (
                        <button key={i}
                        className={ selectedTab === i ? styles.active : ''}
                        onClick={() => setSelectedTab(i)}>
                            {tab}
                        </button>
                    )
                })}
            </div>

            {renderTabContent(selectedTab)}
        </div>
        </>
    )
}