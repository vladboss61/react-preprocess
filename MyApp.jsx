
function Header({ title }) {
    return <div> Header: {title} </div>
}

function MyApp() {
    return (<>
        <Header title={'Hello React Title'}></Header><div>Welcome to React Pre Process code page</div>
        </>)
}