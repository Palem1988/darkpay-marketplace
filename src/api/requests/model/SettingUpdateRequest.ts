// Copyright (c) 2017-2019, The Darkpay Market developers
// Distributed under the GPL software license, see the accompanying
// file COPYING or https://github.com/DarkPayCoin/darkpay-market/blob/develop/LICENSE

import { IsNotEmpty } from 'class-validator';
import { RequestBody } from '../../../core/api/RequestBody';
import { ModelRequestInterface } from './ModelRequestInterface';

// tslint:disable:variable-name
export class SettingUpdateRequest extends RequestBody implements ModelRequestInterface {

    @IsNotEmpty()
    public key: string;

    @IsNotEmpty()
    public value: string;

}
// tslint:enable:variable-name
