import { Link } from "react-router-dom"


export const AddressSection = ()=>{
    return(
        <>
            <div className="amz-checkout-address py-3 border-bottom">
               <div className="d-flex justify-content-between">
                    <div className="d-flex">
                        <h4 className="bold-text px-3">1</h4>
                        <h4 className="bold-text px-3">Delivery address</h4>
                        <div className="normal-text px-5">
                            <span className="amz-fs-14">
                                Himansu Kumar <br />
                                132, Down Street, <br />
                                Nehru Nagar <br />
                                Brahmapur 76005 <br />
                                India <br />
                            </span>
                            <Link to="" className="amz-link">Add delivery instructions</Link>
                        </div>
                    </div>
                    <Link to="" className="amz-link">Change</Link>
               </div> 
            </div>
        </>
    )
}
