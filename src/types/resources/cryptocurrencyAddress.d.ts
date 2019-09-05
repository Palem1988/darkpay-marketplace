// Copyright (c) 2017-2019, The Darkpay Market developers
// Distributed under the GPL software license, see the accompanying
// file COPYING or https://github.com/DarkPayCoin/darkpay-market/blob/develop/LICENSE

import { CryptoAddressType } from 'omp-lib/dist/interfaces/crypto';

declare module 'resources' {

    interface CryptocurrencyAddress {
        id: number;
        type: CryptoAddressType;
        address: string;
        createdAt: Date;
        updatedAt: Date;
    }

}
