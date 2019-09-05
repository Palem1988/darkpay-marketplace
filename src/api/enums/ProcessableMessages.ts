// Copyright (c) 2017-2019, The Darkpay Market developers
// Distributed under the GPL software license, see the accompanying
// file COPYING or https://github.com/DarkPayCoin/darkpay-market/blob/develop/LICENSE

import { ActionMessageInterface } from '../messages/action/ActionMessageInterface';
import { CoreSmsgMessage } from '../messages/CoreSmsgMessage';
import * as resources from 'resources';

export type ProcessableMessages = ActionMessageInterface
                                // | ListingItemMessageInterface
                                | CoreSmsgMessage[]
                                | resources.SmsgMessage[];
