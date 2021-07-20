

import showItemCategory from "../../helpers/itemCategories"



const Category = ({categories})=> {

    const data1 = []
    for( let i=0;i<5;i++){
        data1.push(categories[i])
    }
    const data2 = []
    for( let i=5;i<10;i++){
        data2.push(categories[i])
    }
    const data3 = []
    for( let i=10;i<15;i++){
        data3.push(categories[i])
    }
    const data4 = []
    for( let i=15;i<20;i++){
        data4.push(categories[i])
    }
    return (<>
        <ul>{data1.map(showItemCategory)}</ul>
        <ul>{data2.map(showItemCategory)}</ul>
        <ul>{data3.map(showItemCategory)}</ul>
        <ul>{data4.map(showItemCategory)}</ul>
        
    </>)
}

export default Category