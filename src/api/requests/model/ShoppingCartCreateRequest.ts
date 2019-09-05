// Copyright (c) 2017-2019, The Darkpay Market developers
// Distributed under the GPL software license, see the accompanying
// file COPYING or https://github.com/DarkPayCoin/darkpay-market/blob/develop/LICENSE

import { IsNotEmpty } from 'class-validator';
import { RequestBody } from '../../../core/api/RequestBody';
import { ModelRequestInterface } from './ModelRequestInterface';

// tslint:disable:variable-name
export class ShoppingCartCreateRequest extends RequestBody implements ModelRequestInterface {
    @IsNotEmpty()
    public name: string;

    @IsNotEmpty()
    public profile_id: number;
}
// tslint:enable:variable-name
