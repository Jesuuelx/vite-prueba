import React, { useState } from 'react'

export const AddCategory = ( { onNewCategory } ) => {
  
  const [value, setValue] = useState('');
  
    const handleInputChange = (e) => {

        setValue( e.target.value );


    }

    const handleInputForm = ( e ) => {
      e.preventDefault();


      if ( value.trim() <= 1 ) return;

      onNewCategory( value.trim( ) );
      setValue('');





    }


    return (
    <>
    <form onSubmit={ handleInputForm }>
        <input type="text"
                placeholder='Busca aqui tu gif'
                value={ value }
                onChange={ handleInputChange }                 />
    </form>
    
    </>
  )
}
