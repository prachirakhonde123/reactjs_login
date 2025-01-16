export function OnlyNUmberKeys(evt){
    if (evt.which > 31 && (evt.which < 48 || evt.which > 57))
    {
        evt.preventDefault();
    }
}

export function OnlyText(evt){
    if (!(evt.which >= 65 &&  evt.which <= 93) && (evt.which <= 93 && evt.which <= 120) && (evt.which !== 32 && evt.which !== 8 && evt.which !== 9))
    {
        evt.preventDefault();
    }
}
