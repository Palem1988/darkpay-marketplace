// Copyright (c) 2017-2019, The Darkpay Market developers
// Distributed under the GPL software license, see the accompanying
// file COPYING or https://github.com/DarkPayCoin/darkpay-market/blob/develop/LICENSE

/**
 * OrderStatus
 *
 * The current status of the Order.
 */

export enum OrderStatus {

    SENT = 'SENT',              // order sent to seller @buyer
    RECEIVED = 'RECEIVED',      // order received and created @seller

    PROCESSING = 'PROCESSING',
    SHIPPING = 'SHIPPING',
    COMPLETE = 'COMPLETE',
    REFUNDED = 'REFUNDED',
    CANCELED = 'CANCELED',
    REJECTED = 'REJECTED'

}
