export interface ThemeColors{
    readonly name:string, readonly primary:string, readonly accent:string,
};

export const THEME_COLORS:ThemeColors[]=[
    { primary: 'red', accent: 'cyan', name: 'Red & Cyan' },
    { primary: 'green', accent: 'brown', name: 'Green & Brown' },
    { primary: 'blue', accent: 'pink', name: 'Blue & Pink' },
    { primary: 'purple', accent: 'orange', name: 'Purple & Orange' },
    // {name:'Red', primary:'#f44336', accent:'#9c27b0'},
    // {name:'Blue & Pink', primary:'#ffffff', accent:'#000000'},
    // {name:'Purple & Orange', primary:'#000000', accent:'#ffffff'},
    // {name:'Green & Brown', primary:'#2196f3', accent:'#ff5722'},
    // {name:'Red & Cyan', primary:'#4caf50', accent:'#ffeb3b'},
    // {name:'Red', primary:'#f44336', accent:'#9c27b0'},
];