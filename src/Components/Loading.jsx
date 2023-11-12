import React from 'react'

const Loading = ({children, loading, error, wordSend}) => {
    const eleType = children.type
    
    const loadingHandler = () => {
        if (eleType === 'button') {
            const cloneBtn = React.cloneElement(children, {disabled:true}, wordSend)
            return (
                <>
                    {
                        loading ? cloneBtn: 
                        error ? 
                        <>
                            {children}
                            (<h3 className='mt-3'>{error}</h3>)
                        </>:
                        (
                            children
                        )
                    }
                </>
            )
        }
        return (
            <>
                {
                    loading ?
                    (<h1 className='mt-3'>...loading</h1>): 
                    error ? (<h1 className='mt-3'>{error}</h1>):
                    (
                        children
                    )
                }
            </>
        )
    }

    return loadingHandler()
}

export default Loading
