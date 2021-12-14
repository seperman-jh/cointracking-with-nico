import "styled-components"; //Overwrite DefaultTheme Interface in index.d.ts

declare module "styled-components" {
    export interface DefaultTheme {
        textColor: string;
        bgColor: string;
        accentColor: string;
    }
}