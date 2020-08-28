import React from "react"
import { Link } from "gatsby"
import { Image } from "../components/gatsby-images/image"

import { Close } from "../icons/icons"

const Menu = () => {
  return (
    <div className="products">
      <div className="menu-title">Products</div>
      <div className="close">
        <Close />
      </div>
      <div className="menu">
        <div className="container">
          <div className="menu-inner">
            <ul>
              <li>
                <Link to={`/product/a`}>
                  <div className="wrapper">
                    <div className="line left flex-0">
                      {/* <div className="mask"></div> */}
                    </div>
                    <div className="title">
                      <h2>
                        <div className="text">Air Max 90</div>
                      </h2>
                    </div>
                    <div className="thumbnail">
                      <Image src={1} />
                      {/* <div className="mask"></div> */}
                    </div>
                    <div className="floating-image">
                      <Image src={1} />
                    </div>
                    <div className="line right flex-1">
                      {/* <div className="mask right"></div> */}
                    </div>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Menu
