// Copyright (c) 2017-2019, The Darkpay Market developers
// Distributed under the GPL software license, see the accompanying
// file COPYING or https://github.com/DarkPayCoin/darkpay-market/blob/develop/LICENSE

import { IsNotEmpty } from 'class-validator';
import { RequestBody } from '../../../core/api/RequestBody';
import { ItemImageDataUpdateRequest } from './ItemImageDataUpdateRequest';
import { ModelRequestInterface } from './ModelRequestInterface';

// tslint:disable:variable-name
export class ItemImageUpdateRequest extends RequestBody implements ModelRequestInterface {

    public hash: string;

    @IsNotEmpty()
    public data: ItemImageDataUpdateRequest[];

    public featured: boolean;

}
// tslint:enable:variable-name
