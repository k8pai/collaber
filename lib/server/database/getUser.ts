import { colors } from "../../../data/colors";
import { users } from "../../../data/users";
import { User } from "../../../types";
import { prisma } from "../prisma";
import { getRandom } from "../utils";

/**
 * Get User
 *
 * Simulates calling your database and returning a user with a seeded random colour
 *
 * @param userId - The user's id
 */
export async function getUser(email: string): Promise<User | null> {
    const user = await prisma.user.findUnique({ where: { email } });
    let id = user ? user.id : "charlie.layne@example.com";
    const color = getRandom(colors, id);

    if (!user) {
        return {
            id: "Guest@collaber.com",
            name: "Guest",
            color,
            groupIds: ["Product", "engineering", "design"],
        };
    }

    const data: User = {
        id: user.id,
        name: user.name!,
        color,
        groupIds: ["product", "engineering", "design"],
    };

    return data;

    //   const user = users.find((user) => user.id === userId);

    //   if (!user) {
    //     console.warn(`
    // ERROR: User "${userId}" was not found.

    // Check that you've added the user to data/users.ts, for example:
    // {
    //   id: "${userId}",
    //   name: "Tchoka Ahoki",
    //   avatar: "https://liveblocks.io/avatars/avatar-7.png",
    //   groupIds: ["product", "engineering", "design"],
    // },

    // `);
    //     return null;
    //   }

    //   const color = getRandom(colors, userId);

    //   return { color, ...user };
}
