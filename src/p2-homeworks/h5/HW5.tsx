import React from 'react'
import Header from './Header'
import AllRoutes from './AllRoutes'

function HW5() {
    return (
        <div>
            {/*в gh-pages лучше работает HashRouter*/}
            {/*<HashRouter>*/}

            <Header/>

            <AllRoutes/>

            {/*</HashRouter>*/}
        </div>
    )
}

export default HW5
