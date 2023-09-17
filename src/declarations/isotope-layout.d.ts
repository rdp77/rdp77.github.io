declare module 'isotope-layout' {
    interface IsotopeOptions {
        itemSelector: string;
        layoutMode: string;
    }

    interface Isotope {
        layout(): void;
        destroy(): void;
        arrange(options: { filter: string }): void;
    }

    const Isotope: {
        new(element: string, options: { itemSelector: string }): Isotope;
    };

    export default Isotope;
}
