import React from "react";
import styles from "../Users/User/User.module.css";
import cn from 'classnames'

const Pagination = ({totalUsers,usersPerPage,currentPage,openPageNumber}) => {

        // debugger
        let pages = Math.ceil(totalUsers / usersPerPage);
        let out = [];
        let cp = currentPage;
        let prev_is_shown = 0;

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
                        className={cn(styles.pages,cp === p ? styles.currentPage : '')}
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

        return (
            <div>Pages:<br/>
                {out}<br/>{/*{page}<br/>{this.props.totalUsers}*/}<br/>
            </div>
        )


}

export default Pagination