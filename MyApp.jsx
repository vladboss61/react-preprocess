
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


const employmentEnum = {
    FullTime: 'full-time',
    PartTime: 'part-time'
}

function MyApp() {
    console.log("React", React);

    const formData = {
            firstName: "Vladyslav",
            employment: employmentEnum.PartTime,
            comments: "long comments",
            isFriendly: true
    }

    // const [formData, setForm] = React.useState({
    //     firstName: "Vladyslav",
    //     employment: employmentEnum.PartTime,
    //     comments: "long comments",
    //     isFriendly: true
    // });

    handlerChanges = ($event) => {
        const { name, value, type, checked } = $event.target;
        console.log("name: ", name);
        console.log("value: ", value);
        console.log("type: ", type);
        console.log("checked: ", checked);

        // setForm(prevFromData => ({
        //     ...prevFromData,
        //     [name]: type === "checkbox" ? checked : value
        // }));
    }


    return (<>
        <Header title={'Hello React Title'}>
            <span className="app-span">Hello from patent</span>
        </Header>
        <div>
            <input
                id="firstName_id"
                name="firstName"
                placeholder="First Name"
                type="text"
                onChange={handlerChanges}
            />

            <textarea
                id="comments_id"
                name="comments"
                placeholder="Comments"
                value={formData.comments}
                onChange={handlerChanges}
            />

            <label htmlFor="isFriendly_id">Is Friendly</label>
            <br />
            <input
                id="isFriendly_id"
                type="checkbox"
                name="isFriendly"
                checked={formData.isFriendly}
                onChange={handlerChanges}
            />

            <label htmlFor="employment_id_part-time">Part Time</label>
            <br />
            <input
                type="radio"
                name="employment"
                value={employmentEnum.PartTime}
                id="employment_id_part-time"
                checked={formData.employment === employmentEnum.PartTime}
                onChange={handlerChanges} />

            <label htmlFor="employment_id_full-time">Full Time</label>
            <br />
            <input
                type="radio"
                name="employment"
                value={employmentEnum.FullTime}
                id="employment_id_full-time"
                checked={formData.employment === employmentEnum.FullTime}
                onChange={handlerChanges} />
            
            <button onClick={(e) => {
                console.log("Data from formData.");
                console.log(formData);
            }}> Submit </button>
            
        </div>
        <div>Welcome to React Pre Process code page</div>
    </>)
}