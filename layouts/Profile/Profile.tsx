import clsx from "clsx";
import { ComponentProps, useCallback, useState } from "react";
import { ProfileHeader } from "../../components/Profile";
import { Group } from "../../types";
import styles from "./Profile.module.css";

interface Props extends ComponentProps<"div"> {
    groups: Group[];
}

export function ProfileLayout({
    children,
    groups,
    className,
    ...props
}: Props) {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const handleMenuClick = useCallback(() => {
        setMenuOpen((isOpen) => !isOpen);
    }, []);

    return (
        <div className={clsx(className, styles.container)} {...props}>
            <header className={styles.header}>
                <ProfileHeader
                    isOpen={isMenuOpen}
                    onMenuClick={handleMenuClick}
                />
            </header>
            <main className={styles.main}>{children}</main>
        </div>
    );
}
