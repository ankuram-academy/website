import React from 'react'

function TopNav() {
    return (
        <div id="wrap">
            <header>
                <div className="inner relative">
                    <div className="logo">
                        <a href="/"><img src="img/ankuram_logo.png" alt="Ankuram Academy" /></a>
			        </div>

                    <a id="menu-toggle" href="#"><i className="fa fa-reorder"></i></a>
                    <nav id="navigation">
                        <ul id="main-menu">
                            <li className="current-menu-item"><a href="/">Home</a></li>
                            {/* <li className="parent"><a href="/courses">Courses</a>
                                <ul className="sub-menu">
                                    <li><a href="/courses/uppcs">UPPCS</a></li>
                                    <li><a href="/courses/ssc">SSC</a></li>
                                    <li><a href="/courses/ctet">CTET</a></li>
                                    <li><a href="/courses/uptet">UPTET</a></li>
                                    <li><a className="parent" href="/courses/pcm">PCM (6th to 12th)</a>
                                        <ul className="sub-menu">
                                            <li><a href="/courses/pcm/physics">Physics</a></li>
                                            <li><a href="/courses/pcm/chemistry">Chemistry</a></li>
                                            <li><a href="/courses/pcm/maths">Mathmetics</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="/courses/english">English (6th to 12th)</a></li>
                                </ul>
                            </li>
                            <li><a href="/faculty">Faculty</a></li>
                            <li><a href="/contact">Contact</a></li> */}
                        </ul>
                    </nav>
                    <div className="clear"></div>
                </div>
            </header>
        </div>
    )
}

export default TopNav
