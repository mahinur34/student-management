import { appConfig } from '@/helpers/config'
import React from 'react'
import { Container } from 'react-bootstrap'
import "./topbar.scss";

export const Topbar = () => {
  return (
    <div>
    <Container>
        <div className='topbar'>
            <i className='pi pi-megaphone'></i> {appConfig.project.slogan}
        </div>

        <div>
            <i className='pi pi-user'></i> Login
        </div>
    </Container>

    </div>
  )
}


export default Topbar;