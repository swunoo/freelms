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

export function getInputValue(name: string, parent?: Element): string {
    const ele = parent ? parent.querySelector('input[name="'+name+'"]') : document.querySelector('input[name="'+name+'"]');
    return (ele as HTMLInputElement).value;
}

export function getSelectValue(name: string, parent?: Element): string {
    const ele = parent ? parent.querySelector('select[name="'+name+'"]') : document.querySelector('select[name="'+name+'"]');
    return (ele as HTMLSelectElement).value;
}

// let touchStartX = 0, touchEndX = 0;
// const handleSwipe = () => {
//     if (touchEndX-touchStartX>150){
//         setShowBar(false)
//     }
// }
// const touchStart = (e:any) => touchStartX = e.changedTouches[0].screenX;
// const touchEnd = (e:any) => {
//     touchEndX = e.changedTouches[0].screenX;
//     handleSwipe();
// }