function Five(){
   
    /*
    if(value){
        return <div><h1>this is true statement</h1></div>
        }
    else{
        return <div><h1>this is false statement</h1></div>
    }
        */
    const val=true;
    return(
        <div>
            {val?'this is true':'this is false'}
        </div>
    );
}
export default Five ;