import React from 'react';
import { useState } from 'react';
import s from './Paginator.module.css';


const Paginator = ({ currentPage, changeCurrentPage, totalCount, pageSize, pack = 10 }) => {
    let pagesCount = Math.ceil(totalCount / pageSize);
    let PackCount = Math.ceil(pagesCount / pack);
    let [currentPack, setCurrentPack] = useState(1)
    let start = (currentPack - 1) * pack + 1;
    let end = currentPack * pack;
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return (
        <div className={s.pages}>
            {start > pack && <span className={s.button}
                onClick = {() => setCurrentPack(currentPack-1)}> &laquo; </span>}
            {pages.filter(p => p >= start && p <= end).map(p => {
                return <span key={p} className={`${s.page} ${currentPage === p && s.active}`}
                    onClick={() => { changeCurrentPage(p) }}>{p}</span>
            })}
            { end < pagesCount && <span className={s.button}
                onClick={() => setCurrentPack(currentPack + 1)}> &raquo; </span>}
        </div>
    );
}

export default Paginator;
