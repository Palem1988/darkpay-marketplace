// Copyright (c) 2017-2019, The Darkpay Market developers
// Distributed under the GPL software license, see the accompanying
// file COPYING or https://github.com/DarkPayCoin/darkpay-market/blob/develop/LICENSE

/**
 * ModelNotModifiableException
 * ----------------------------------------
 *
 */

import { Exception } from '../../core/api/Exception';


export class ModelNotModifiableException extends Exception {
    constructor(name: string) {
        super(400, `${name} cannot be modified.`);
    }
}

