import React, { FC, useState } from 'react'
import { Col, Form } from 'react-bootstrap'


interface IProps {
  general: {
    id: number,
    title: string,
    options: any
  },
  handleSwitch: any
}


const PanelItem: FC<IProps> = ({ general, handleSwitch }) => {

  const [showOptions, setShowOptions]: any = useState(false)


  return (
    <Col className='mt-2 panelItem cursor-pointer' md={6} lg={4}>
      <Form className='panel rounded p-4 d-flex align-items-center justify-content-between'>
        <div className='d-flex align-items-center justify-content-between w-100' >
          <span>{general.title}</span>
          <div className='d-flex align-items-center justify-content-center'>
            <Form.Switch
              onClick={() => setShowOptions(!showOptions)}
              className='me-2'
              onChange={(e: any) => handleSwitch(e.target.checked)}
            />
            {
              general.options.length
                ?
                !showOptions ?
                  <svg xmlns="http://www.w3.org/2000/svg" width={17} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                  : <svg xmlns="http://www.w3.org/2000/svg" width={17} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                  </svg>
                : ''
            }
          </div>
        </div>
      </Form>

      <div className={`flex-column ${showOptions ? 'd-flex' : 'd-none'}`} >
        {
          general?.options.map((option: any) => (
            <Form className='panel py-2 px-4_5 d-flex align-items-center justify-content-between'>
              <span style={{ fontSize: '14px' }} >{option.title}</span>
              <div className='d-flex justify-content-center'>

                {
                  option?.select
                    ? <Form.Select className='me-2' size='sm' >
                      {
                        option?.select.map((value: any) => (<option value={value}>{value}</option>))
                      }
                    </Form.Select>
                    : ''
                }

                <Form.Switch
                  onChange={(e: any) => handleSwitch(e.target.checked)}
                />

              </div>
            </Form>
          ))
        }
      </div>
    </Col>
  )
}



export default PanelItem