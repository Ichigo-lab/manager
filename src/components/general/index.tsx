import React from 'react'
import { Row } from 'react-bootstrap'
import PanelItem from '../PanelItem'
import data from '../../data'


export default function General() {

    const handleSwitch: any = (status: boolean) => {
        //
    }

    const { general }: any = data

    return (
        <Row className='mt-4'>
            <h5>{Object.keys(data)[0].toUpperCase()}</h5>
            {
                general.map((general: any) => (
                    <PanelItem key={general.id} general={general} handleSwitch={handleSwitch} />
                ))
            }
        </Row>

    )
}
