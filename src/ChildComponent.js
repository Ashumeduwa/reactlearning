const ChildCOmpinent = (props) => {
    const data = '"this data is sent form child to parent"'
    return(
        <>
        {props.newData(data)}
        </>
    )
};

export default ChildCOmpinent