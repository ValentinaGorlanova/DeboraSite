import { useEffect, useState } from 'react'

import PaymentTab from './PaymentTab'
import ResumeTab from './ResumeTab'
import HistoryTab from './HistiryTab'
import InvoiceTab from './InvoiceTab'

import styles from './styles.module.scss'

export function Content() {

    const [selectedTab, setSelectedTab] = useState(0);

    useEffect(() => {
        renderTab(selectedTab)
    }, [selectedTab])

    const renderTab = (tab: number) => {
        switch (tab) {
            case 0:
                return <PaymentTab resetTab={() => setSelectedTab(1)}/>
            case 1:
                return <ResumeTab  resetTab={() => setSelectedTab(3)}/>
            case 2:
                return <HistoryTab/>
            case 3:
                return <InvoiceTab  resetTab={() => setSelectedTab(1)}/>
        }
    }

    return (
    <div className={styles.container}>
        {
            selectedTab === 3 ? 
                <div className={styles.tabsSection}>
                    <button
                    className={ styles.active }>
                    Emitir Nota Fiscal
                    </button>
                </div> :
                <div className={styles.tabsSection}>
                    <button
                    className={ selectedTab === 0 ? styles.active : ''}
                    onClick={() => setSelectedTab(0)}>
                    Pagamento
                    </button>
                    <button
                    className={ selectedTab === 1 ? styles.active : ''}
                    onClick={() => setSelectedTab(1)}>
                    Resumo
                    </button>
                    <button
                    className={ selectedTab === 2 ? styles.active : ''}
                    onClick={() => setSelectedTab(2)}>
                    Histórico de Pagamento
                    </button>
                </div>
        }


        {renderTab(selectedTab)}
    </div>
    )
}