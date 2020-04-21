

export function formatDate(dateList){
    const date = new Date(dateList);
    const day = date.getDay();
    const month = date.getMonth();
    const year =  date.getFullYear();
    const dataUpdate = `${day}-${month}-${year}`
    return dataUpdate ;
}