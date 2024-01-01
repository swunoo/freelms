export function hrsToTimeStr(hr: number, short?: boolean): string {

    if(!hr) return '';

    const hrPart = Math.floor(hr);
    const minPart = ((hr%1)*60);

    const strAndPad = (n: number) => n.toString().padStart(2, '0')

    return (
        short
        // if short==true: "1hr 30m"
        ? (hrPart>0 ? hrPart + " h " : "") + (minPart>0 ? minPart + " m" : "")
        // else:            "01:00"
        : strAndPad(hrPart) + ':' + strAndPad(minPart)
    );
}