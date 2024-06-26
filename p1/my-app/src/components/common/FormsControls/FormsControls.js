import React from 'react';
import styles from './FormsControls.module.css'
import {Field} from "redux-form";
import {required} from "../../../utils/validate/validator";

const FormControl = ({input, meta: {touched,error}, elType, ...props}) => {
    let hasError = touched && error;

    return (
        <div className={styles.formControls + " " + (hasError && styles.error)}>

            <div>
                {React.createElement(elType, {/*type:'file', */...input, ...props})}
            </div>
            {hasError && <span> {error}</span>}
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
export const Hidden = (props) => { // деструктуризація, REST-оператор
    //const {input, meta, ...restProps} = props;
    return <FormControl {...props} elType='input' />
}
export const FileUpload = (props) => { // деструктуризація, REST-оператор
    //const {input, meta, ...restProps} = props;
    return <FormControl {...props} elType='input' type='file'/>
}


export const createMyField = (placeholder,component,name,validators, props = {}, text = '') =>
    (
        <div>
            <Field
                placeholder={placeholder}
                component={component}
                name={name}
                validate={validators}
                {...props}
            /> {text}
        </div>
    )

