import React from 'react'

function Preloader() {
    return (
        <React.Fragment>
            <div class="preloader-area">
                <div class="preloader">
                    <div class="status">
                        <div class="status-mes">Ankuram Academy</div>
                    </div>
                </div>
            </div>
            <a href="javascript:" class="return-to-top"><i class="fas fa-angle-up"></i></a>
        </React.Fragment>
    )
}

export default Preloader
