import { groups } from "../../../data/groups";
import { Group } from "../../../types";

/**
 * Get Groups
 *
 * Simulates calling your database and returning a list of groups
 *
 * @param ids - The group ids
 */
export async function getGroups(ids: string[]): Promise<Group[]> {
    // Implement logic for getting data from users who will have access to this groups.

    return [
        {
            id: "product",
            name: "Product",
        },
        {
            id: "engineering",
            name: "Engineering",
        },
        {
            id: "design",
            name: "Design",
        },
    ];

    //   return groups.filter((group) => ids.includes(group.id));
}
