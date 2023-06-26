import React from 'react'

export default function About(props) {
    return (
        <div className='container my-3 shadow-lg p-3 rounded'>
            <div className="accordion" id="accordionExample" style={{ backgroundColor: props.mode === `dark` ? `black` : `white`, color: props.mode === `dark` ? `white` : `black` }}>
                <div className="accordion-item" style={{ backgroundColor: props.mode === `dark` ? `black` : `white`, color: props.mode === `dark` ? `white` : `black` }}>
                    <h2 className="accordion-header">
                        <button style={{ backgroundColor: props.mode === `dark` ? `black` : `white`, color: props.mode === `dark` ? `white` : `black` }} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Our Free Plan
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong className='text-warning'>This is our free plan.</strong>
                            <div className="col rounded text-center" style={{ backgroundColor: props.mode === `dark` ? `black` : `white`, color: props.mode === `dark` ? `white` : `black`, border: '1px solid white' }}>
                                <div className="card mb-4 rounded-3 shadow-sm" style={{ backgroundColor: props.mode === `dark` ? `black` : `white`, color: props.mode === `dark` ? `white` : `black` }}>
                                    <div className="card-header py-3" style={{ backgroundColor: props.mode === `dark` ? `black` : `white`, color: props.mode === `dark` ? `white` : `black` }}>
                                        <h4 className="my-0 fw-normal" style={{ backgroundColor: props.mode === `dark` ? `black` : `white`, color: props.mode === `dark` ? `white` : `black` }}>Free</h4>
                                    </div>
                                    <div className="card-body" style={{ backgroundColor: props.mode === `dark` ? `black` : `white`, color: props.mode === `dark` ? `white` : `black` }}>
                                        <h1 style={{ backgroundColor: props.mode === `dark` ? `black` : `white`, color: props.mode === `dark` ? `white` : `black` }} className="card-title pricing-card-title">$0<small className="text-primary">/mo</small></h1>
                                        <ul style={{ backgroundColor: props.mode === `dark` ? `black` : `white`, color: props.mode === `dark` ? `white` : `black` }} className="list-unstyled mt-3 mb-4">
                                            <li>10 users included</li>
                                            <li>2 GB of storage</li>
                                            <li>Email support</li>
                                            <li>Help center access</li>
                                        </ul>
                                        <button type="button" className="w-100 btn btn-lg btn-outline-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                            Sign up to join us
                                        </button>

                                        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                            <div style={{ backgroundColor: props.mode === `dark` ? `#212529` : `white`, color: props.mode === `dark` ? `white` : `black`, border: '1px solid white' }} className="modal-dialog rounded">
                                                <div style={{ backgroundColor: props.mode === `dark` ? `#212529` : `white`, color: props.mode === `dark` ? `white` : `black` }} className="modal-content">
                                                    <div style={{ backgroundColor: props.mode === `dark` ? `#212529` : `white`, color: props.mode === `dark` ? `white` : `black` }} className="modal-header">
                                                        <h1 className="modal-title fs-5 text" id="exampleModalLabel">{props.modal}</h1>
                                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                    </div>
                                                    <div style={{ backgroundColor: props.mode === `dark` ? `#212529` : `white`, color: props.mode === `dark` ? `white` : `black` }} className="modal-body">
                                                        <input style={{ backgroundColor: props.mode === `dark` ? `rgb(64, 53, 53)` : `white`, color: props.mode === `dark` ? `white` : `black` }} type="email" className="form-control my-2" id="myPassword" placeholder="name@example.com" />
                                                        <input style={{ backgroundColor: props.mode === `dark` ? `rgb(64, 53, 53)` : `white`, color: props.mode === `dark` ? `white` : `black` }} type="password" className="form-control my-2" id="myPassword" placeholder="Enter your password" />
                                                    </div>
                                                    <div style={{ backgroundColor: props.mode === `dark` ? `#212529` : `white`, color: props.mode === `dark` ? `white` : `black` }} className="modal-footer">
                                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                        <button type="button" className="btn btn-primary">Sign up</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={{ backgroundColor: props.mode === `dark` ? `black` : `white`, color: props.mode === `dark` ? `white` : `black` }}>
                    <h2 className="accordion-header">
                        <button style={{ backgroundColor: props.mode === `dark` ? `black` : `white`, color: props.mode === `dark` ? `white` : `black` }} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Our Standard Plan
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong className='text-warning'>This is Our Standard Plan.</strong>
                            <div className="col rounded text-center" style={{ backgroundColor: props.mode === `dark` ? `black` : `white`, color: props.mode === `dark` ? `white` : `black`, border: '1px solid white' }}>
                                <div className="card mb-4 rounded-3 shadow-sm" style={{ backgroundColor: props.mode === `dark` ? `black` : `white`, color: props.mode === `dark` ? `white` : `black` }}>
                                    <div className="card-header py-3" style={{ backgroundColor: props.mode === `dark` ? `black` : `white`, color: props.mode === `dark` ? `white` : `black` }}>
                                        <h4 className="my-0 fw-normal" style={{ backgroundColor: props.mode === `dark` ? `black` : `white`, color: props.mode === `dark` ? `white` : `black` }}>Standard</h4>
                                    </div>
                                    <div className="card-body" style={{ backgroundColor: props.mode === `dark` ? `black` : `white`, color: props.mode === `dark` ? `white` : `black` }}>
                                        <h1 style={{ backgroundColor: props.mode === `dark` ? `black` : `white`, color: props.mode === `dark` ? `white` : `black` }} className="card-title pricing-card-title">$50<small className="text-primary">/mo</small></h1>
                                        <ul style={{ backgroundColor: props.mode === `dark` ? `black` : `white`, color: props.mode === `dark` ? `white` : `black` }} className="list-unstyled mt-3 mb-4">
                                            <li>100 users included</li>
                                            <li>8 GB of storage</li>
                                            <li>Email support</li>
                                            <li>Help center access</li>
                                        </ul>
                                        <button type="button" className="w-100 btn btn-lg btn-outline-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                            Sign up to join us
                                        </button>

                                        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                            <div style={{ backgroundColor: props.mode === `dark` ? `#212529` : `white`, color: props.mode === `dark` ? `white` : `black`, border: '1px solid white' }} className="modal-dialog rounded">
                                                <div style={{ backgroundColor: props.mode === `dark` ? `#212529` : `white`, color: props.mode === `dark` ? `white` : `black` }} className="modal-content">
                                                    <div style={{ backgroundColor: props.mode === `dark` ? `#212529` : `white`, color: props.mode === `dark` ? `white` : `black` }} className="modal-header">
                                                        <h1 className="modal-title fs-5 text" id="exampleModalLabel">{props.modal}</h1>
                                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                    </div>
                                                    <div style={{ backgroundColor: props.mode === `dark` ? `#212529` : `white`, color: props.mode === `dark` ? `white` : `black` }} className="modal-body">
                                                        <input type="email" className="form-control my-2" id="myPassword" placeholder="name@example.com" />
                                                        <input type="password" className="form-control my-2" id="myPassword" placeholder="Enter your password" />
                                                    </div>
                                                    <div style={{ backgroundColor: props.mode === `dark` ? `#212529` : `white`, color: props.mode === `dark` ? `white` : `black` }} className="modal-footer">
                                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                        <button type="button" className="btn btn-primary">Sign up</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={{ backgroundColor: props.mode === `dark` ? `black` : `white`, color: props.mode === `dark` ? `white` : `black` }}>
                    <h2 className="accordion-header">
                        <button style={{ backgroundColor: props.mode === `dark` ? `black` : `white`, color: props.mode === `dark` ? `white` : `black` }} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Our Pro Plan
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong className='text-warning'>This is Our Pro Plan</strong>
                            <div className="col rounded text-center" style={{ backgroundColor: props.mode === `dark` ? `black` : `white`, color: props.mode === `dark` ? `white` : `black`, border: '1px solid white' }}>
                                <div className="card mb-4 rounded-3 shadow-sm" style={{ backgroundColor: props.mode === `dark` ? `black` : `white`, color: props.mode === `dark` ? `white` : `black` }}>
                                    <div className="card-header py-3" style={{ backgroundColor: props.mode === `dark` ? `black` : `white`, color: props.mode === `dark` ? `white` : `black` }}>
                                        <h4 className="my-0 fw-normal" style={{ backgroundColor: props.mode === `dark` ? `black` : `white`, color: props.mode === `dark` ? `white` : `black` }}>Pro</h4>
                                    </div>
                                    <div className="card-body" style={{ backgroundColor: props.mode === `dark` ? `black` : `white`, color: props.mode === `dark` ? `white` : `black` }}>
                                        <h1 style={{ backgroundColor: props.mode === `dark` ? `black` : `white`, color: props.mode === `dark` ? `white` : `black` }} className="card-title pricing-card-title">$150<small className="text-primary">/mo</small></h1>
                                        <ul style={{ backgroundColor: props.mode === `dark` ? `black` : `white`, color: props.mode === `dark` ? `white` : `black` }} className="list-unstyled mt-3 mb-4">
                                            <li>unlimited users included</li>
                                            <li>20 GB of storage</li>
                                            <li>Email support</li>
                                            <li>Help center access</li>
                                        </ul>
                                        <button type="button" className="w-100 btn btn-lg btn-outline-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                            Sign up to join us
                                        </button>

                                        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                            <div style={{ backgroundColor: props.mode === `dark` ? `#212529` : `white`, color: props.mode === `dark` ? `white` : `black`, border: '1px solid white' }} className="modal-dialog rounded">
                                                <div style={{ backgroundColor: props.mode === `dark` ? `#212529` : `white`, color: props.mode === `dark` ? `white` : `black` }} className="modal-content">
                                                    <div style={{ backgroundColor: props.mode === `dark` ? `#212529` : `white`, color: props.mode === `dark` ? `white` : `black` }} className="modal-header">
                                                        <h1 className="modal-title fs-5 text" id="exampleModalLabel">{props.modal}</h1>
                                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                    </div>
                                                    <div style={{ backgroundColor: props.mode === `dark` ? `#212529` : `white`, color: props.mode === `dark` ? `white` : `black` }} className="modal-body">
                                                        <input type="email" className="form-control email my-2" id="myPassword" placeholder="name@example.com" />
                                                        <input type="password" className="form-control my-2" id="myPassword" placeholder="Enter your password" />
                                                    </div>
                                                    <div style={{ backgroundColor: props.mode === `dark` ? `#212529` : `white`, color: props.mode === `dark` ? `white` : `black` }} className="modal-footer">
                                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                        <button type="button" className="btn btn-primary">Sign up</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
