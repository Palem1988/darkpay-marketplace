// Copyright (c) 2017-2019, The Darkpay Market developers
// Distributed under the GPL software license, see the accompanying
// file COPYING or https://github.com/DarkPayCoin/darkpay-market/blob/develop/LICENSE

/**
 * HttpException
 * ----------------------------------------
 *
 */

import { Exception } from '../../core/api/Exception';


export class HttpException extends Exception {
    constructor(id: number, message: string) {
        super(id, message);
    }
}
