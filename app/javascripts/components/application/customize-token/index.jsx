import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { toastr } from 'react-redux-toastr';

import classnames from 'classnames';

import nfToken from '@/contracts/nfTokenFactory';

import { addTokenAction } from '@/redux/actions';

import TokenType from '../token-type';
import Ether from '@/components/ether';

import nfTokenTypeImageUrl from '@/services/nfToken-type-image-url';

import './style.scss';


const CustomizeToken = class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      price: '',
      tokenType: 0,
      title: '',
      titleError: '',
      errorMessage: '',
      redirectToTokenList: false,
    };
    this.fixedAssets = [
      {
        title: 'Dragonclaw Hook',
        image: '/images/token-images/cheap-dota2-dragonclaw-hook-9682.jpg',
        price: 0.03,
      },
      {
        title: 'Vigil Triumph',
        image: '/images/token-images/cheap-dota2-vigil-triumph-21872.jpg',
        price: 0.03,
      },
      {
        title: 'Sullen Harvest',
        image: '/images/token-images/cheap-dota2-sullen-harvest-20909.jpg',
        price: 0.03,
      },
      {
        title: 'Sea Rake Bridle',
        image: '/images/token-images/cheap-dota2-sea-rake-s-bridle-20164.jpg',
        price: 0.03,
      },
      {
        title: 'Astral Drift',
        image: '/images/token-images/cheap-dota2-astral-drift-461.jpg',
        price: 0.03,
      },
      {
        title: 'Scorching Talon',
        image: '/images/token-images/cheap-dota2-scorching-talon-20130.jpg',
        price: 0.03,
      },
    ];
  }

  async componentDidMount() {
    try {
      const contractInstance = await nfToken(window.web3);
      const price = await contractInstance.getCurrentPrice();

      this.setState({ price: price.toString() });
    } catch (error) {
      toastr.error('Error', error.message);
    }
  }

  async onClickSave() {
    // Reset the error handling
    this.setState({ titleError: '' });

    // TODO: Replace these magic numbers with an app-wide config:
    if (this.state.title.length < 1) {
      this.setState({ titleError: 'Please enter at least 1 character for the title' });
    } else {
      try {
        let contractInstance = await nfToken(window.web3);

        const txHash = await contractInstance.buyToken.sendTransaction(
          this.state.tokenType,
          this.state.title,
          { value: this.state.price }
        );

        this.props.addToken({ transactionHash: txHash });
        this.setState({ redirectToTokenList: true });
        toastr.success('Success', 'The transaction has been broadcast.');
      } catch (err) {
        toastr.error('Error', 'The transaction was cancelled or rejected.');
      }
    }
  }

  onClickTokenType(index) {
    this.setState({ tokenType: index });
  }

  render() {
    if (this.state.redirectToTokenList) {
      return <Redirect to={'/tokens/all'}/>;
    }

    if (this.state.titleError) {
      var titleError =
        <p className="help is-danger">{this.state.titleError}</p>;
    }

    if (this.state.errorMessage) {
      var errorMessage = <p className='help is-danger'>{this.state.errorMessage}</p>;
    }

    return (
      <section className='section'>
        <div className='container'>
          <div className='columns'>
            <div className='column is-one-half-desktop'>

              <div className="etherplate-form">
                <div className="etherplate-form--wrapper">
                  <div className="columns is-multiline">
                    {this.fixedAssets
                      .map((item, index) => {
                        var selected = this.state.tokenType === index;
                        return (
                          <div key={item.title} className="column is-one-third">
                            <TokenType
                              title={item.title}
                              url={item.image}
                              onClick={() => this.onClickTokenType(index)}
                              selected={selected}
                              price={item.price}
                            />
                          </div>
                        );
                      })}
                  </div>

                  <br/>
                  <p>

                  </p>
                  {errorMessage}
                </div>
              </div>
            </div>

            <div className='column is-one-third has-text-centered'>
              <figure className="image is-square">
                <img src={this.fixedAssets[this.state.tokenType].image}/>
              </figure>
              <button
                disabled={this.state.selectedToken === null}
                className={classnames('button is-success is-medium')}
                onClick={(e) => this.onClickSave()}>
                Buy Token
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToken: (token) => {
      dispatch(addTokenAction(token));
    }
  };
};

export default connect(null, mapDispatchToProps)(CustomizeToken);
