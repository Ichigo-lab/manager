import PanelItem from '../PanelItem'
import data from '../../data'
import { Row } from 'react-bootstrap'

export default function Settings() {

    const handleSwitch: any = (status: boolean) => {
         //
    }

    const { settings }: any = data

    return (
        <Row className='mt-4'>
            <h5>{Object.keys(data)[1].toUpperCase()}</h5>
            {
                settings.map((general: any) => (
                    <PanelItem key={general.id} general={general} handleSwitch={handleSwitch} />
                ))
            }
        </Row>
    )
}
