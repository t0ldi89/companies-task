import React, {useState} from 'react'


const SearchInput = () => {

    const [searchValue, setSearchValue] = useState({
        text: '',
        value: false
    })



     const handleOnChnage = (e)  =>{
         searchValue.text = e.target.value;
        let searchText = searchValue.text;

        if(searchText.length < 5 ){
            setSearchValue({
                value: true
            })
        }else{
            setSearchValue({
                value: false
            })
        }
     }





    return(
<div className='container'>
                <div className='container__row'>
                    <div className=' headerStyle-searchContainer col-mob-12'>
                        <input 
                        name='searchInput'
                        className='searchInput'
                        placeholder='Search company ...' 
                        onChange={handleOnChnage}

                        />
                        {searchValue.value ? <div className='errorMsg'>please enter a minimum of 5 characters</div> : null}     
                    </div>
                </div>
            </div>
    )
}

export default SearchInput;