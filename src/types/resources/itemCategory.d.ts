// Copyright (c) 2017-2019, The Darkpay Market developers
// Distributed under the GPL software license, see the accompanying
// file COPYING or https://github.com/DarkPayCoin/darkpay-market/blob/develop/LICENSE

declare module 'resources' {

    interface ItemCategory {
        id: number;
        key: string;
        name: string;
        description: string;
        createdAt: Date;
        updatedAt: Date;
        parentItemCategoryId: number;
        ChildItemCategories: ItemCategory[];
        ParentItemCategory: ItemCategory;
    }

}
