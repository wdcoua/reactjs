import React from 'react';
import styles from './FormsControls.module.css'

const FormControl = ({input, meta, elType, ...props}) => {
    let hasError = meta.touched && meta.error;

    return (
        <div className={styles.formControls + " " + (hasError && styles.error)}>

            <div>
                {React.createElement(elType, {...input, ...props})}
            </div>
            {hasError && <span> {meta.error}</span>}
        </div>
    )
}



export const Textarea = (props) => { // деструктуризація, REST-оператор
    return <FormControl {...props} elType='textarea'/>
}
/*
export const Textarea = (props) => { // деструктуризація, REST-оператор
    const {input, meta, ...restProps} = props;
    return <FormControl {...props}>
        <textarea {...input} {...restProps}/>
    </FormControl>
}*/
/*
export const Input = (props) => { // деструктуризація, REST-оператор
    const {input, meta, ...restProps} = props;
    return <FormControl {...props}>
        <input {...input} {...restProps}/>
    </FormControl>
}*/

export const Input = (props) => { // деструктуризація, REST-оператор
    //const {input, meta, ...restProps} = props;
    return <FormControl {...props} elType='input'/>
}
