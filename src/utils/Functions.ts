export const hexToRgb = (hex: string, opacity: number) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    const rgba = result && {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
        a: opacity
    };

    return `rgba(${rgba?.r}, ${rgba?.b}, ${rgba?.b}, ${rgba?.a})`;
}