import { useAppSelector } from 'common/hooks/useAppSelector'

const useHelpSelectors = () => {
    const errors = useAppSelector((state) => state.app.errors)
    const infoText = useAppSelector((state) => state.app.infoText)
    const appStatus = useAppSelector((state) => state.app.status)

    return { errors, infoText, appStatus }
}
export { useHelpSelectors }
