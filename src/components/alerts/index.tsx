import React from 'react'
import { Row } from 'react-bootstrap'
import PanelItem from '../PanelItem'
import data from '../../data'


export default function Alerts() {

    const handleSwitch: any = (status: boolean) => {
        //
    }

    const { alerts }: any = data

    return (
        <Row className='mt-4'>
            <h5>{Object.keys(data)[2].toUpperCase()}</h5>
            {
                alerts.map((general: any) => (
                    <PanelItem key={general.id} general={general} handleSwitch={handleSwitch} />
                ))
            }
        </Row>
    )
}
