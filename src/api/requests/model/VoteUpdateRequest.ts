// Copyright (c) 2017-2019, The Darkpay Market developers
// Distributed under the GPL software license, see the accompanying
// file COPYING or https://github.com/DarkPayCoin/darkpay-market/blob/develop/LICENSE

import { IsNotEmpty } from 'class-validator';
import { RequestBody } from '../../../core/api/RequestBody';
import { ModelRequestInterface } from './ModelRequestInterface';

// tslint:disable:variable-name
export class VoteUpdateRequest extends RequestBody implements ModelRequestInterface {

    public msgid: string;

    public proposal_option_id: number;
    public signature: string;
    public voter: string;

    @IsNotEmpty()
    public weight: number;

    public postedAt: number;
    public receivedAt: number;
    public expiredAt: number;

}
// tslint:enable:variable-name
