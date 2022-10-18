import css from './CenterWrapper.module.sass'

interface CenterWrapperProps {
    children: JSX.Element
}

const CenterWrapper: React.FC<CenterWrapperProps> = ({children}) => {
    return (
        <div className={css.wrapper}>
            {children}
        </div>
    )
}

export default CenterWrapper