import React from 'react'

export default function Footer(props) {
    return (
        <div>
            <div class="container">
                <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                    <div class="col-md-4 d-flex align-items-center">
                        <a style={{color: props.mode===`dark`?`white`:`black`}} href="/" class="mb-3 me-2 mb-md-0 text-decoration-none lh-1">
                        {props.title}
                        </a>
                        <span style={{color: props.mode===`dark`?`white`:`black`}} class="mb-3 mb-md-0">© 2023 Company, Inc</span>
                    </div>

                    <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
                        <li class="ms-3"><a style={{color: props.mode===`dark`?`white`:`black`}} class="" href="/"><i class="fa-brands fa-2x fa-twitter"></i></a></li>
                        <li class="ms-3"><a style={{color: props.mode===`dark`?`white`:`black`}} class="" href="/"><i class="fa-brands fa-2x fa-instagram"></i></a></li>
                        <li class="ms-3"><a style={{color: props.mode===`dark`?`white`:`black`}} class="" href="/"><i class="fa-brands fa-2x fa-facebook"></i></a></li>
                    </ul>
                </footer>
            </div>
        </div>
    )
}
