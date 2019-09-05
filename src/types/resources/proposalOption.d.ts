// Copyright (c) 2017-2019, The Darkpay Market developers
// Distributed under the GPL software license, see the accompanying
// file COPYING or https://github.com/DarkPayCoin/darkpay-market/blob/develop/LICENSE

declare module 'resources' {

    interface ProposalOption {
        id: number;
        proposalId: number;
        optionId: number;
        description: string;
        hash: string;
        Proposal: Proposal;
        Votes: Vote[];

        createdAt: Date;
        updatedAt: Date;
    }

}
