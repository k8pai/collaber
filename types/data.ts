/**
 * These types are used in `/data`
 */

import { Groups } from "@prisma/client";

export type User = {
    id: string;
    name: string;
    avatar?: string;
    color: string;
    groupIds: string[];
};

export type Group = Groups;
