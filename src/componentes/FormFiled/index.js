import React from 'react'

function FormField({ label, type, name, value, onChange}){
    const fieldId = `Id_${name}`
    return (
        <div>
            <label
                htmlFor={fieldId}    
            >
                {label}
                <input
                    id={fieldId}
                    type={type}
                    value={value}
                    name={name}
                    onChange={onChange}
                />
            </label>
        </div>
    )
}

export default FormField