/**
 * ScandiPWA - Progressive Web App for Magento
 *
 * Copyright © Scandiweb, Inc. All rights reserved.
 * See LICENSE for license details.
 *
 * @license OSL-3.0 (Open Software License ("OSL") v. 3.0)
 * @package scandipwa/base-theme
 * @link https://github.com/scandipwa/base-theme
 */

import PropTypes from 'prop-types';
import { PureComponent } from 'react';

import { PRODUCT_IN_STOCK } from 'Component/CartItem/CartItem.config';

import { PRODUCT_ALERT_IN_STOCK, PRODUCT_ALERT_PRICE_DROP } from './ProductAlerts.config';

import './ProductAlerts.style';

/** @namespace Component/ProductAlerts/Component */
export class ProductAlerts extends PureComponent {
    static propTypes = {
        handlePriceDropSubscribe: PropTypes.func.isRequired,
        isInStockAlertEnabled: PropTypes.bool.isRequired,
        isPriceAlertEnabled: PropTypes.bool.isRequired,
        stockStatus: PropTypes.bool
    };

    static defaultProps = {
        stockStatus: null
    };

    renderPriceDropSubscribeButton() {
        const { handlePriceDropSubscribe, isPriceAlertEnabled } = this.props;

        if (!isPriceAlertEnabled) {
            return null;
        }

        return (
            <button
              block="ProductAlerts"
              elem="PriceDrop"
              // eslint-disable-next-line react/jsx-no-bind
              onClick={ () => handlePriceDropSubscribe(PRODUCT_ALERT_PRICE_DROP) }
            >
                { __('Notify me when the price drops') }
            </button>
        );
    }

    renderInStockSubscribeButton() {
        const {
            handlePriceDropSubscribe,
            isInStockAlertEnabled,
            stockStatus
        } = this.props;

        if (!isInStockAlertEnabled) {
            return null;
        }

        if (stockStatus === PRODUCT_IN_STOCK || !stockStatus) {
            return null;
        }

        return (
            <button
              block="ProductAlerts"
              elem="InStock"
              // eslint-disable-next-line react/jsx-no-bind
              onClick={ () => handlePriceDropSubscribe(PRODUCT_ALERT_IN_STOCK) }
            >
                { __('Notify me when this product is in stock') }
            </button>
        );
    }

    render() {
        return (
            <div
              block="ProductAlerts"
              elem="Wrapper"
            >
                { this.renderPriceDropSubscribeButton() }
                { this.renderInStockSubscribeButton() }
            </div>
        );
    }
}

export default ProductAlerts;
