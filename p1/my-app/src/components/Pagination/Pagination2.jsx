import React, {useState} from "react";
import styles from "../Users/User/User.module.css";

const Pagination2 = ({totalUsers,usersPerPage,currentPage,openPageNumber,pagesPerPortion = 10}) => {

        // debugger
        let pages = Math.ceil(totalUsers / usersPerPage);
        let out2 = [];
        let cp = currentPage;
        let prev_is_shown = 0;
        let portionWithCurrentPage = Math.ceil(cp/pagesPerPortion);

        let [currentPortion, setCurrentPortion] = useState(portionWithCurrentPage);
        // out2.push((pages))

        let portions = Math.ceil(pages / pagesPerPortion);
        let portionStart = (currentPortion - 1) * pagesPerPortion + 1;
        let portionEnd = currentPortion * pagesPerPortion;

        // out2.push((currentPortion + ' '))
        // out2.push((pagesPerPortion + ' '))
        // out2.push((portionStart + ' '))

        if(currentPortion > 2){
            out2.push((<span onClick={() => setCurrentPortion(1)}
                             className={styles.pages}
                             title="first" key='first'
            >{'<<'}</span>))
        }
        if(currentPortion > 1){
            out2.push((<span onClick={() => setCurrentPortion(currentPortion - 1)}
                             className={styles.pages} title="previous" key="previous">{'<-'}</span>))
        }
        for (let i = 1; i <= pages; i++) {
            if( i >= portionStart && i <= portionEnd ){
                out2.push((<span key={i}
                                 onClick={
                                     (cp === i ? null : () => {
                                             openPageNumber(i)
                                         }
                                     )
                                 }
                                 className={cp === i ? styles.currentPage : styles.pages}
                                 // className={styles.currentPage + ' ' + styles.pages}
                >{i}</span>))
            }
        }
        if(currentPortion < portions){
            out2.push((<span onClick={() => setCurrentPortion(currentPortion + 1)}
                               className={styles.pages} title="next" key="next">{'->'}</span>))
        }
        if(currentPortion + 1 < portions){
            out2.push((<span onClick={() => setCurrentPortion(portions)}
                               className={styles.pages} title="last" key="last">{'>>'}</span>))
        }
        if(currentPortion !== portionWithCurrentPage){
            out2.push((<span onClick={() => setCurrentPortion(portionWithCurrentPage)}
                               className={styles.current_page} title="curent page" key="curent page">{'> * <'}</span>))
        }



    /*
    if (pages > 5) {

        for(let p = 1; p <= pages; p++){

            if(p === 1 || p === pages){
                out.push((<span
                    key={p}
                    onClick={
                        (cp === p ? null : () => {
                                openPageNumber(p)
                            }
                        )
                    }
                    className={cp === p ? styles.currentPage : styles.pages}
                > {p} </span>));
                prev_is_shown = 0;
            }

            if( ((p === cp && cp !== 1 && cp !== pages) ||
                (p === cp-1 && cp-1 !== 1 ) ||
                (p === cp+1 && cp+1 !== pages ) )   ){
                out.push((<span
                    key={p}
                    onClick={
                        (cp === p ? null : () => {
                                openPageNumber(p)
                            }
                        )
                    }
                    className={cp === p ? styles.currentPage : styles.pages}
                > {p} </span>));
                prev_is_shown = 0;
            }

            if (prev_is_shown === 1)
                out.push(' ... ');

            prev_is_shown++;
        }

    } else {    // якщо сторінок <= 5

        //     console.log(styles.currentPage)
        //     debugger
        for (let i = 1; i <= 5; i++) {
            if (cp === i) {
                out.push((<span key={i} className={styles.currentPage + ' ' + styles.pages}> {i} </span>))
            } else {
                out.push((<span key={i} onClick={() => {
                    openPageNumber(i)
                }} className={styles.pages}> {i} </span>))
            }
        }
    }
*/
        return (
            <div>Pages:<br/>
                {out2}<br/>{/*{page}<br/>{this.props.totalUsers}*/}<br/>
            </div>
        )


}

export default Pagination2