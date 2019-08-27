import formPage from '../src/components/form'

const Form = (props) => {
    let { page } = props
    const Route = formPage.hasOwnProperty(page) ? page : 'default'
    const PAGE = formPage[Route]

    return (
        <PAGE />
    )
}

Form.getInitialProps = ({ query }) => {

    const { page } = query

    return {
        page
    }
}

export default Form