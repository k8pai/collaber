export * from "./auth";
export * from "./database";
export * from "./documents";
export * from "./liveblocks";
export * from "./notify";
export * from "./utils";
export * from "./prisma";

// ============================================================================
if (typeof window !== "undefined") {
    console.log();
    console.error(
        "DANGER: You're using a function from /lib/server on the client"
    );
    console.error("This may expose your secret key(s)");
    console.log();
}
