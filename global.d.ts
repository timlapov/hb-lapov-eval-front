import type { IStaticMethods } from "preline/dist";
import noUiSlider from 'nouislider';

declare global {
    interface Window {
        // Optional third-party libraries
        _;
        $: typeof import("jquery");
        jQuery: typeof import("jquery");
        noUiSlider: typeof noUiSlider;
        DataTable;
        Dropzone;
        VanillaCalendarPro;

        // Preline UI
        HSStaticMethods: IStaticMethods;
    }
}

export {};