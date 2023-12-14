
function Header({ title }) {

    const clickHandler = (e) => { 
        console.log('click me!');
    }

    return <div className="app-header" onClick={clickHandler}> Header: {title} </div>
}

function MyApp() {
    return (<>
        <Header title={'Hello React Title'}></Header><div>Welcome to React Pre Process code page</div>
        </>)
}