// Copyright (c) 2017-2019, The Darkpay Market developers
// Distributed under the GPL software license, see the accompanying
// file COPYING or https://github.com/DarkPayCoin/darkpay-market/blob/develop/LICENSE

import { MessageCreateParamsInterface } from './MessageCreateParamsInterface';
import {BidRejectReason} from '../../enums/BidRejectReason';

export interface BidRejectMessageCreateParams extends MessageCreateParamsInterface {
    bidHash: string;    // bid hash to reject
    reason: BidRejectReason;
}


