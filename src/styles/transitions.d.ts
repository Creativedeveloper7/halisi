export declare const defaultTransition: {
    type: string;
    stiffness: number;
    damping: number;
};
export declare const staggerChildren: {
    staggerChildren: number;
};
export declare const delayedTransition: (delay: number) => {
    type: string;
    stiffness: number;
    damping: number;
    delay: number;
};
export declare const pageTransition: {
    initial: {
        opacity: number;
    };
    animate: {
        opacity: number;
    };
    exit: {
        opacity: number;
    };
    transition: {
        duration: number;
    };
};
