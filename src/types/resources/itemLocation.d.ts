// Copyright (c) 2017-2019, The Darkpay Market developers
// Distributed under the GPL software license, see the accompanying
// file COPYING or https://github.com/DarkPayCoin/darkpay-market/blob/develop/LICENSE

declare module 'resources' {

    interface ItemLocation {
        id: number;
        country: string;
        address: string;
        description: string;
        createdAt: Date;
        updatedAt: Date;
        LocationMarker: LocationMarker;
    }

}
