import Topbar from '@/components/common/header/topbar'
import { appConfig } from '@/helpers/config'
import { montserrat } from '@/helpers/fonts'
import React from 'react'

export const metadata = {
    title: {
        template: `%s |  ${appConfig.project.name}`,
        default: appConfig.project.name,
    },
    description : appConfig.project.description,
}

export const RootLayout = ({children}) => {
  return (
    <html lang='en' className={montserrat.variable}>
        <body>
            <Topbar/>
            {children}
        </body>
    </html>
  )
}
