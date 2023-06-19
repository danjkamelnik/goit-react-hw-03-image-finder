import { TailSpin } from  'react-loader-spinner'
import { Loader } from './Loader.styled'

export const Loading = () => {
    return(
        <Loader>
            <TailSpin
                height="80"
                width="80"
                color="#3464eb"
                ariaLabel="tail-spin-loading"
                radius="1"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            />
        </Loader>
    )
}