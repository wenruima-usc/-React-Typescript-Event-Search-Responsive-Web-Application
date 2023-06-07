import React from 'react';
interface Item{
    id:string,
    date:string,
    time:string,
    icon:string,
    event:string,
    genre:string,
    venue:string
}

interface ResultTableProps{
    items:Item[]
}
const ResultTable: React.FC<ResultTableProps>= ({items}) =>{

    return (
        <ul style={{color:'white'}}>
            {items.map((item,index)=>(
                <li key={index}>{item.id}</li>
            )
            )}
        </ul>
    );
}

export default ResultTable;