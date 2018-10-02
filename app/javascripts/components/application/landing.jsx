import React, {
  Component
} from 'react'
import { Link } from 'react-router-dom'

import Hero from '@/components/hero'

import './landing.scss';

export default class Landing extends Component {

  render () {
    return (
      <div className="container">
        <div className="columns">
          <div className="column is-four-fifths">
            <div className="pages-sale-reclame">
              <div className="sale-reclame" style={{backgroundImage: 'url(https://gamerall.com/img/rare-skins/bg-rare-dota2.jpg)'}}>
              <div className="sale-reclame_item item-1">
                <img alt="photo" className="sale-reclame_img" src="https://gamerall.com/img/rare-skins/photo5.png" />
              </div>
              <div className="sale-reclame_item item-2">
                <div className="sale-reclame_text">
                  <div className="sale-reclame_tagline">Dota 2 Skins</div>
                    <p className="sale-reclame_line-2">Full Selection of Dota 2 Skins</p>
                  </div>
                    <p className="sale-text">Cheap Dota 2 Skins with Instant Delivery</p>
                  <div className="divider"></div>
                  </div>
                </div>
              </div>

              <div className="content_sortPagiBar">
                <div className="sortPagiBar block">
                  <div className="columns">
                    <div className="column is-three-quarters">
                      <div className="inner"> There are 2240 products.</div>
                    </div>
                    <div className="column">
                      <div className="inner">
                        <select onChange={null} className="selectProductSort form-control" id="selectPrductSort">
                          <option value="position:asc">Sort by</option>
                          <option value="price:asc">Price: Lowest first</option>
                          <option value="price:desc">Price: Highest first</option>
                          <option value="name:asc">Product Name: A to Z</option>
                          <option value="name:desc">Product Name: Z to A</option>
                          <option value="quantity:desc">In stock</option>
                          <option value="reference:asc">Reference: Lowest first</option>
                          <option value="reference:desc">Reference: Highest first</option>
                        </select>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
              <div className="products_block  block view-grid columns" id="product_list">
                <div className="column is-one-third">
                  <div className="product-container clearfix">
                    <div className="center_block">
                      <h4 className="name-product">
                        <a href="#" style={{visibility: 'visible'}}><span>Inscribed Demon Eater</span></a>
                      </h4>
                      <div className="wrapper_product_image">
                        <div className="plabel_div" id="pl_162424608" style={{bottom: '5px', right: '5px'}} >
                          <img className="plabel_img" src="https://gamerall.com/modules/productlabel/views/img/bg/2/2/1/7/dota2.png" style={{maxHeight: '150px', maxWidth: '150px', background: 'transparent', verticalAlign: 'middle'}} />
                        </div>
                        <ul className="wrapper-block-stickers"></ul>
                        <a className="product_image" href="#" title="Inscribed Demon Eater">
                          <img className="img-responsive" src="https://gamerall.com/117483-home_default/cheap-dota2-inscribed-demon-eater-15578.jpg" alt="Inscribed Demon Eater" title="Inscribed Demon Eater" />
                          <span className="product-additional" rel="582598"></span>
                          <span className="hot_price">-$3.96</span>
                          <span className="hot">-14%</span>
                        </a>
                        <div className="wrp-wear"></div>
                      </div>
                      <div className="wrapper__features-container">
                        <div className="features-container">
                          <span className="value">Wearable</span>
                          <span className="value">Inscribed</span>
                          <span className="value">Head</span>
                          <span className="value">Shadow Fiend</span>
                          <span className="value">Arcana</span>
                        </div>
                      </div>
                      <div className="right_block">
                        <div className="content_price price_container">
                          <span className="price discounted_price" style={{display: 'inline'}}> $26.49 </span>
                          <sup className="original-price"> $30.45 </sup>
                        </div>
                          <span className="steam_price item_market_prise">
                            Market price: <span className="original-price"> $30.45 </span>
                          </span>
                          <div className="quantity-container ">
                            <input className="quantity_wanted text form-control" maxLength="3" name="qty" size="2" type="text" value="1" />
                            <a className="button ajax_add_to_cart_button exclusive" href="#" rel="ajax_id_product_582598" title="Add to cart">
                              <span>Add to cart</span>
                            </a>
                            <div className="btn-add-setting-product">
                              <div className="xp-status-btn">
                                <div className="xp-status-iformation">
                                  <p>2649 XP FOR BUYING THIS PRODUCT</p>
                                  <p> READ MORE ABOUT <a href="#" title="Click here to read more about our Level Up Xperience.">+XP HERE</a>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <span className="in_stock availability" style={{backgroundColor: '#B27133'}}> DELIVERY: INSTANT </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          </div>
          <div className="column is-one-fifths">
            test 2
          </div>
        </div>
      </div>
    )
  }

}
