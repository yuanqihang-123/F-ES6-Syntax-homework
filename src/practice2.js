const inject = function (items,sections){
    sections.sort((sec1,sec2)=>{
        return sec2.index - sec1.index;
    })
    for (let i = 0; i < sections.length; i++) {
        const content = sections[i].content;
        const index = sections[i].index;
        items.splice(index,0,content)
    }
    return items;
}
export { inject };
