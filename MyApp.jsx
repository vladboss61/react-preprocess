
function Header({ title, children }) {
    console.log("Header is rendering.");

    const [classHeader, setClassHeader] = React.useState("app-header-aqua");
    React.useEffect(() => {
        console.log('useEffect hook');
    }, []);

    const clickHandler = (e) => {
        console.log('click me!, Change to Red Header');
        setClassHeader("app-header-red");
    };
    
    return <div className={classHeader} onClick={clickHandler}> Header: {title},
            <div>Children: {children}</div>
        </div>
}

function MyApp() {
    return (<>
        <Header title={'Hello React Title'}>
            <span className="app-span">Hello from patent</span>
        </Header>
        <div>Welcome to React Pre Process code page</div>
    </>)
}