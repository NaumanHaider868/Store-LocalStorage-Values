import React,{useRef} from 'react'
import { SignalCellularAlt, SignalWifi4Bar, Battery30, MoreVert, Search } from '@mui/icons-material';
import { Navbar, Container, Form } from 'react-bootstrap';
function Notes() {
    const data = useRef();
    const handleChange = () => {
        console.log(data.current.value)
        localStorage.setItem('inputValue',data.current.value)
    }
    console.log(localStorage.getItem('inputValue'))
    return (
        <>
            <div className='main'>
                <div className='content'>
                    <div className='row'>
                        <div className='col-md-10'>
                            <p>1:16</p>
                        </div>
                        <div className='col-md-2'>
                            <div className='icon'>
                                <span><SignalCellularAlt /></span>
                                <span><SignalWifi4Bar /></span>
                                <span><Battery30 /></span>
                            </div>
                        </div>
                    </div>
                    <Navbar style={{ padding: '12px 12px 0px 12px' }}>
                        <Container>
                            <p>Notes</p>
                            <MoreVert />
                        </Container>
                    </Navbar>
                    <div className='main-content'>
                        <div className='inputField'>

                            <input placeholder='Search' ref={data} /><Search onClick={handleChange} />
                        </div>
                        <div className='row'>
                            <div className='col-md-4'>
                                <div className='head'>
                                    <p>Box1</p>
                                    <MoreVert />
                                </div>
                                <div className='box-content'>
                                    <Form.Check label="name" />
                                </div>
                            </div>
                            <div className='col-md-4 box2'>
                                <div className='head'>
                                    <p>Box2</p>
                                    <MoreVert />
                                </div>
                                <div className='box-content'>
                                    <Form.Check label="1" />
                                    <Form.Check label="1" />
                                    <Form.Check label="1" />
                                    <Form.Check label="1" />
                                    <Form.Check label="1" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Notes