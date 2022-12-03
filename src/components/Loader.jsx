export default function Loader() {
    return(
        <div className="container-fluid d-flex align-items-center justify-content-center">
            <div className="col-11 p-3 ">
            <div className="d-flex justify-content-center">
                <div className="spinner-border text-success" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
            </div>
        </div>
    )
}