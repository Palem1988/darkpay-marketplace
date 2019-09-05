// Copyright (c) 2017-2019, The Darkpay Market developers
// Distributed under the GPL software license, see the accompanying
// file COPYING or https://github.com/DarkPayCoin/darkpay-market/blob/develop/LICENSE

import { Cryptocurrency } from 'omp-lib/dist/interfaces/crypto';

declare module 'resources' {

    interface ItemPrice {
        id: number;
        currency: Cryptocurrency;
        basePrice: number;
        createdAt: Date;
        updatedAt: Date;
        ShippingPrice: ShippingPrice;
        CryptocurrencyAddress: CryptocurrencyAddress;
    }

}
