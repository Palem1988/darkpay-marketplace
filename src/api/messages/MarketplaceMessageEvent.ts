// Copyright (c) 2017-2019, The Darkpay Market developers
// Distributed under the GPL software license, see the accompanying
// file COPYING or https://github.com/DarkPayCoin/darkpay-market/blob/develop/LICENSE

import * as resources from 'resources';
import { MarketplaceMessage } from './MarketplaceMessage';

export class MarketplaceMessageEvent {
    public smsgMessage: resources.SmsgMessage;
    public marketplaceMessage: MarketplaceMessage;
}
