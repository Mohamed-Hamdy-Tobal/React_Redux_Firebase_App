import React from 'react'
import { SpannerLoading } from './Loading/SpannerLoading'

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
                    loading ? <SpannerLoading/>: 
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
