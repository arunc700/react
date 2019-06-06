import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Menu extends Component {
    render() {
        return (

            <header class="w-100 pa3 ph5-ns bg-white">
                <div class="db dt-ns mw9 center w-100">
                    <div class="db dtc-ns v-mid tl w-50">
                        <Link to="/" class="dib f5 f4-ns fw6 mt0 mb1 link black-70" title="HHomeContentome">
                            SDS
                        </Link>
                    </div>
                    <nav class="db dtc-ns v-mid w-100 tl tr-ns mt2 mt0-ns">
                    <Link title="Documentation" to="/"
                            class="f6 fw6 hover-blue link black-70 mr2 mr3-m mr4-l dib">
                            Home
      </Link>

                        <Link title="Documentation" to="/About/"
                            class="f6 fw6 hover-blue link black-70 mr2 mr3-m mr4-l dib">
                            About us
      </Link>

                        <Link title="Gallery of sites built with Tachyons" to="/Contact/"
                            class="f6 fw6 hover-blue link black-70 mr2 mr3-m mr4-l dib">
                            Contact
      </Link>
      <Link title="Gallery of sites built with Tachyons" to="/Contact/"
                            class="f6 fw6 hover-blue link black-70 mr2 mr3-m mr4-l dib">
                            Services
      </Link>
                    </nav>
                </div>
            </header>

        )
    }
}

export default Menu
