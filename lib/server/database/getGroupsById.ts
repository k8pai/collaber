import { Groups } from "@prisma/client";
import { prisma } from "../prisma";

/**
 * Get Groups
 *
 * Simulates calling your database and returning a list of groups
 *
 * @param ids - The group ids
 */
export async function getGroupsById(ids: string[]): Promise<Groups[]> {
    // Implement logic for getting data from users who will have access to this groups.
    const data: Groups[] = await prisma.groups.findMany({
        where: { id: { in: ids } },
    });

    return data;

    //   return groups.filter((group) => ids.includes(group.id));
}
